import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { PiEyesFill } from 'react-icons/pi';
import axios from 'axios';
import Header from "../Home/Header";
import './index.css';
import mainUrl from "../mainUrl";

class Login extends Component {
    state = {
        showPassword: false,
        identifier: '', // Changed from username to identifier
        password: '',
        error: ''
    };

    togglePasswordShow = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleLogin = async (e) => {
        e.preventDefault();
        const { identifier, password } = this.state;

        try {
            const response = await axios.post(`${mainUrl}/api/user/login`, { identifier, password });
            console.log('Login successful, received token:', response.data.token);
            localStorage.setItem('token', response.data.token); // Store the token in localStorage

            // Redirect based on role
            if (response.data.role === 'admin') {
                this.props.history.push('/admin'); // Redirect to admin page
            } else {
                this.props.history.push('/'); // Redirect to user page
            }
        } catch (err) { 
            this.setState({ error: 'Invalid credentials' });
        }
    };

    render() {
        const { showPassword, identifier, password, error } = this.state;

        return (
            <>
                <Header />
                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center justify-content-center ">
                            <form className="login-container" onSubmit={this.handleLogin}>
                                <h1 className="login-head">Login</h1>
                                {error && <p className="error-message">{error}</p>}
                                <label className="username">Username or Email</label>
                                <input
                                    type="text"
                                    className="input-element"
                                    value={identifier}
                                    onChange={(e) => this.setState({ identifier: e.target.value })}
                                />
                                <label className="username">Password</label>
                                <div className="password-container">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="password-input-element"
                                        value={password}
                                        onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                                    <span className="password-span" onClick={this.togglePasswordShow}>
                                        {showPassword ? <PiEyesFill className="icon" /> : "🙈"}
                                    </span>
                                </div>
                                <button className="login-button" type="submit">Login</button>
                                <p className="login-para">If you don't have an account, <a href="/SignIn">Sign In</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Login);
