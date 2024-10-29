// src/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {


    return (
        <>

           
  <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2"></small>
                            <small>123 Street,Hayatabad , Peshawar</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <small className="far fa-clock text-primary me-2"></small>
                            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-phone-alt text-primary me-2"></small>
                            <small>+92 345 6789</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-1" to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-1" to="/"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-1" to="/"><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-0" to="/"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0 text-primary"><i className="far fa-hospital me-3"></i>UNIQUE</h1>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/Services" className="nav-item nav-link">Service</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                                <a href="feature.html" className="dropdown-item">Feature</a>
                                <a href="team.html" className="dropdown-item">Our Doctor</a>
                                <a href="appointment.html" className="dropdown-item">Appointment</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        <Link to="/dishboard" className="nav-item nav-link">Dishaboard</Link>
                    </div>
                    <Link to="/" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </nav>

            

            <div className='bg-warning vh-100' style={{
                backgroundImage: 'url(https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiaWhoLWhlYWx0aGNhcmUtYmVyaGFkXC9maWxlXC81Q05IMkVRVDZ2dHYzWHVvaFZCcS5wbmcifQ:ihh-healthcare-berhad:XgOhKWzWefi1kZz_ewrQeA9NEnA0jxDqB_RTPx2LP7k?format=webp)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

                <div className="container mt-5 ">
                    <h2 className="text-center">Admin Dashboard</h2>
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <div className="card text-white mb-3"  style={{ backgroundColor: 'rgb(0, 23, 255, 0.3)' }}>
                                <div className="card-header">
                                    <i className="fas fa-user-nurse"></i> Nurses
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Total Nurses</h5>
                                    <p className="card-text">10</p>
                                    <Link to="/nurse"
                                        className="btn btn-light"

                                    >
                                        <i className="fas fa-eye"></i> View Nurses
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-white  mb-3" style={{ backgroundColor: 'rgb(0, 255, 23, 0.3)' }}>
                                <div className="card-header">
                                    <i className="fas fa-user-injured"></i> Patients
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Total Patients</h5>
                                    <p className="card-text">50</p>
                                    <Link to="/patients"
                                        className="btn btn-light"

                                    >
                                        <i className="fas fa-eye"></i> View Patients
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-white bg-warning mb-3">
                                <div className="card-header">
                                    <i className="fas fa-user-tie"></i> Staff
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Total Staff</h5>
                                    <p className="card-text">20</p>
                                    <Link to="/staff"
                                        className="btn btn-light"

                                    >
                                        <i className="fas fa-eye"></i> View Staff
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-white  mb-3" style={{ backgroundColor: 'rgb(255, 23, 0, 0.3)' }}>
                                <div className="card-header">
                                    <i className="fas fa-user-md"></i> Doctors
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Total Doctors</h5>
                                    <p className="card-text">15</p>
                                    <Link to="/doctor"
                                        className="btn btn-light"

                                    >
                                        <i className="fas fa-eye"></i> View Doctors
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-white  mb-3" style={{ backgroundColor: 'rgb(255, 23, 0, 0.3)' }}>
                                <div className="card-header">
                                    <i className="fas fa-user-md"></i> Nusrses Duties
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Toatal Nurses</h5>
                                    <p className="card-text">15</p>
                                    <Link to="/nduties"
                                        className="btn btn-light"

                                    >
                                        <i className="fas fa-eye"></i> View Duties
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
