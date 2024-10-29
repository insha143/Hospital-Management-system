import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Staff = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get('http://localhost:3006/staff');
                setStaff(response.data);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            }
        };

        fetchStaff();
    }, []);

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

            <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Staff Record</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase mb-0">
                            <li class="breadcrumb-item"><a class="text-white" href="/">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="/">Pages</a></li>
                            <li class="breadcrumb-item text-primary active" aria-current="page">Staff</li>
                        </ol>
                    </nav>
                </div>
            </div>

         
        <div className="container mt-5">
            <h2 className="text-center">Staff Records</h2>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Duty Time</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {staff.map((member, index) => (
                        <tr key={index}>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.phone}</td>
                            <td>{member.gender}</td>
                            <td>{member.role}</td>
                            <td>{member.duty_time}</td>
                            <td>{member.scalary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default Staff;
