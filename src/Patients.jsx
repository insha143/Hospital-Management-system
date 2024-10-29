import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('http://localhost:3006/patient');
                const data = await response.json();
                setPatients(data);
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        };

        fetchPatients();
    }, []);

    const filteredPatients = patients.filter(patient =>
        patient.patient_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Patient Record</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase mb-0">
                            <li class="breadcrumb-item"><a class="text-white" href="/">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="/">Pages</a></li>
                            <li class="breadcrumb-item text-primary active" aria-current="page">Patient</li>
                        </ol>
                    </nav>
                </div>
            </div>
        <div className="container mt-5">
            <Link to="/addpatient" className='btn btn-success mb-3'>Add+</Link>
         
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Patient Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <h4 className="text-center">Patient Records</h4>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Phone No</th>
                                    <th>Address</th>
                                    <th>Appointment With</th>
                                    <th>Fee</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPatients.length > 0 ? (
                                    filteredPatients.map((patient, index) => (
                                        <tr key={index}>
                                            <td>{patient.patient_name}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.gender}</td>
                                            <td>{patient.phone}</td>
                                            <td>{patient.address}</td>
                                            <td>{patient.app_with_doc}</td>
                                            <td>{patient.fee}</td>
                                            <td>
                                                <button className='btn btn-success me-3'>Update</button>
                                                <button className='btn btn-danger'>Discharge</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="text-center">
                                            No patient records found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Patients;