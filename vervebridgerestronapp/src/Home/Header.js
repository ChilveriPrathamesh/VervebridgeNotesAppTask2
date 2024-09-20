import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

class Header extends Component {
    state = {
        activeLink: '/',
        user: null,
        error: null,
        showPopup: false,
        showDropdown: false
    };

    async componentDidMount() {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const response = await axios.get('http://localhost:5000/api/user/details', {
                    headers: {
                        'Authorization': token
                    }
                });
                this.setState({ user: response.data });
            } catch (error) {
                this.setState({ error: 'Failed to fetch user details' });
            }
        } else {
            this.setState({ error: 'No user logged in' });
        }
    }

    togglePopup = () => {
        this.setState((prevState) => ({ showPopup: !prevState.showPopup }));
    };

    handleLogout = () => {
        localStorage.removeItem('token');
        this.setState({ user: null, showPopup: false });
        this.props.history.push('/login');
    };

    setActiveLink = (link) => {
        this.setState({ activeLink: link });
        console.log(link)
    };

    handleMouseEnter = () => {
        this.setState({ showDropdown: true });
    };

    handleMouseLeave = () => {
        this.setState({ showDropdown: false });
    };

    render() {
        const { activeLink, user, showPopup, showDropdown } = this.state;

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href="#" className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>VerveBridge Restoran</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <Link
                                to='/'
                                className={`nav-item nav-link ${activeLink === '/' ? 'active' : ''}`}
                                onClick={() => this.setActiveLink('/')}
                            >
                                Home
                            </Link>
                            <Link
                                to='/About'
                                className={`nav-item nav-link ${activeLink === '/About' ? 'active' : ''}`}
                                onClick={() => this.setActiveLink('/About')}
                            >
                                About
                            </Link>
                            <Link
                                to='/Service'
                                className={`nav-item nav-link ${activeLink === '/Service' ? 'active' : ''}`}
                                onClick={() => this.setActiveLink('/Service')}
                            >
                                Service
                            </Link>
                            <Link
                                to='/Menu'
                                className={`nav-item nav-link ${activeLink === '/Menu' ? 'active' : ''}`}
                                onClick={() => this.setActiveLink('/Menu')}
                            >
                                Menu
                            </Link>
                            <div 
                                className="nav-item dropdown"
                                onMouseEnter={this.handleMouseEnter}
                                onMouseLeave={this.handleMouseLeave}
                            >
                                <span className="nav-link dropdown-toggle">Pages</span>
                                {showDropdown && (
                                    <div className="dropdown-menu show">
                                        <Link
                                            to="/Booking"
                                            className={`dropdown-item ${activeLink === '/Booking' ? 'active' : ''}`}
                                            onClick={() => this.setActiveLink('/Booking')}
                                        >
                                            Booking
                                        </Link>
                                        <Link
                                            to="/Team"
                                            className={`dropdown-item ${activeLink === '/Team' ? 'active' : ''}`}
                                            onClick={() => this.setActiveLink('/Team')}
                                        >
                                            Our Team
                                        </Link>
                                        <Link
                                            to="/Testimonial"
                                            className={`dropdown-item ${activeLink === '/Testimonial' ? 'active' : ''}`}
                                            onClick={() => this.setActiveLink('/Testimonial')}
                                        >
                                            Testimonial
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link
                                to='/Contact'
                                className={`nav-item nav-link ${activeLink === '/Contact' ? 'active' : ''}`}
                                onClick={() => this.setActiveLink('/Contact')}
                            >
                                Contact
                            </Link>
                        </div>
                        <Link
                            to={'/Login'}
                            className={`btn btn-primary py-2 px-4 ${activeLink === '/BookATable' ? 'active' : ''}`}
                            onClick={() => this.setActiveLink('/BookATable')}
                        >
                            Book A Table
                        </Link>

                        <FaUserCircle className="btn btn-primary user-icon-home" onClick={this.togglePopup} />
                        {showPopup && (
                            <div className="popup">
                                {user ? (
                                    <>
                                        <FaUserCircle className="btn btn-primary user-icon" onClick={this.togglePopup} />
                                        <p className="greet">Welcome</p>
                                        <p className="user-name">{user.username}</p>
                                        <button onClick={this.handleLogout} className="btn btn-primary logout-btn">Logout</button>
                                    </>
                                ) : (
                                    <>
                                        <p>Please log in to continue</p>
                                        <Link to="/login" onClick={this.togglePopup} className="btn btn-primary login-btn">Login</Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </nav>
            </>
        );
    }
}

export default withRouter(Header);
