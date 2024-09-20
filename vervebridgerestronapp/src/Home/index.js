import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import { FaArrowUp } from 'react-icons/fa';
import './style.css';

class Home extends Component {
    
    state = { 
        activeTab: 'tab-1', 
        // isClickedCategory: "" 
    };

    // handleCategoryClicked = (category) => {
    //     this.setState({ isClickedCategory: category });
    //     console.log("Category clicked:", category); 
    // }

    handleTabClick = (tabId) => {
        this.setState({ activeTab: tabId });
    };



    render() {
        const { activeTab } = this.state;
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "5px",
            slidesToShow: 2,
            speed: 500
          };
           
        
    return (
        <div className="container-xxl bg-white p-0">
            {/* Spinner Start */}
            {/* <div id="spinner" classNameName="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div classNameName="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span classNameName="sr-only">Loading...</span>
                </div>
            </div> */}
            {/* Spinner End */}

            {/*Hero Start */}
            <div className="container-xxl position-relative p-0">  
                <Header handleCategoryClicked={this.handleCategoryClicked} />
                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                                <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <Link to={'/Login'} className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img className="img-fluid" src='/img/hero.png' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar & Hero End */}

            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                    <h5>Master Chefs</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                                    <h5>Quality Food</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                    <h5>Online Order</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                    <h5>24/7 Service</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}

            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" alt="" />
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" style={{ marginTop: '25%' }} alt="" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" alt="" />
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                            <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i>VerveBridge Restoran</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.</p>
                            <a href=" " className="btn btn-primary py-3 px-5">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
             
            {/* <!-- Menu start --> */}
            <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a  href=' '
                                className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${activeTab === 'tab-1' ? 'active' : ''}`}
                                onClick={() => this.handleTabClick('tab-1')}
                                role="button"
                            >
                                <i className="fa fa-coffee fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Popular</small>
                                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href=' '
                                className={`d-flex align-items-center text-start mx-3 pb-3 ${activeTab === 'tab-2' ? 'active' : ''}`}
                                onClick={() => this.handleTabClick('tab-2')}
                                role="button"
                            >
                                <i className="fa fa-hamburger fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Special</small>
                                    <h6 className="mt-n1 mb-0">Lunch</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  href=' '
                                className={`d-flex align-items-center text-start mx-3 me-0 pb-3 ${activeTab === 'tab-3' ? 'active' : ''}`}
                                onClick={() => this.handleTabClick('tab-3')}
                                role="button"
                            >
                                <i className="fa fa-utensils fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0">Dinner</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        {activeTab === 'tab-1' && (
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    {/* Repeated item components */}
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <div className="col-lg-6" key={index}>
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src={`img/menu-${index + 1}.jpg`} alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab-2' && (
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    {/* Repeated item components */}
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <div className="col-lg-6" key={index}>
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src={`img/menu-${index + 1}.jpg`} alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'tab-3' && (
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    {/* Repeated item components */}
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <div className="col-lg-6" key={index}>
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src={`img/menu-${index + 1}.jpg`} alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Menu End --> */}

        {/* <!-- Reservation Start --> */}
        <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="video">
                            <button 
                                type="button" 
                                className="btn-play" 
                                data-bs-toggle="modal" 
                                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" 
                                data-bs-target="#videoModal"
                            >
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 bg-dark d-flex align-items-center">
                        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                            <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                            <h1 className="text-white mb-4">Book A Table Online</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input 
                                                type="text" 
                                                className="form-control datetimepicker-input" 
                                                id="datetime" 
                                                placeholder="Date & Time" 
                                                data-target="#date3" 
                                                data-toggle="datetimepicker" 
                                            />
                                            <label htmlFor="datetime">Date & Time</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select className="form-select" id="select1">
                                                <option value="1">People 1</option>
                                                <option value="2">People 2</option>
                                                <option value="3">People 3</option>
                                            </select>
                                            <label htmlFor="select1">No Of People</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea 
                                                className="form-control" 
                                                placeholder="Special Request" 
                                                id="message" 
                                                style={{ height: '100px' }} 
                                            ></textarea>
                                            <label htmlFor="message">Special Request</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* 16:9 aspect ratio */}
                                <div className="ratio ratio-16x9">
                                    <iframe 
                                        title='name'
                                        className="embed-responsive-item" 
                                        src="" 
                                        id="video" 
                                        allowFullScreen 
                                        allow="autoplay"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* <!-- Reservation End --> */}

           {/* <!-- Team Start --> */}
        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src="img/team-4.jpg" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=" "><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}

        {/* <!-- Testimonial Start --> */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
            <div className="text-center">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                <h1 className="mb-5">Our Clients Say!!!</h1>
            </div>
            <div className="slider-container">
                <Slider {...settings} className="test-container">
                <div className="testimonial-item">
                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" alt="Client" />
                    <div className="ps-3">
                        <h5 className="mb-1">Client Name</h5>
                        <small>Profession</small>
                    </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                    <p>Justo stet sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                    <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" alt="Client" />
                    <div className="ps-3">
                        <h5 className="mb-1">Another Client</h5>
                        <small>Another Profession</small>
                    </div>
                    </div>
                </div>
                </Slider>
            </div>
            </div>
        </div>

        {/* <!-- Testimonial End --> */}
        

        <Footer />
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <FaArrowUp />
        </a>
        </div>
    )};
}

export default Home;
