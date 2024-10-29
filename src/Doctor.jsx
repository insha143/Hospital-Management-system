import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Doctor.css'; 

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
  
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('http://localhost:3006/doctor');
                if (response.ok) {
                    const data = await response.json();
                    setDoctors(data);
                } else {
                    console.error('Error fetching doctors:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this doctor?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:3006/doctor/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setDoctors(doctors.filter(doctor => doctor.id !== id));
                alert('Doctor deleted successfully');
            } else {
                const errorData = await response.json();
                alert('Error deleting doctor: ' + errorData.error || 'Unknown error');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error deleting doctor: ' + error.message);
        }
    };

    return (
        <>
            <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2"></small>
                            <small>123 Street, Hayatabad, Peshawar</small>
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
                        <Link to="/dishboard" className="nav-item nav-link">Dishboard</Link>
                    </div>
                    <Link to="/" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </nav>

            <div className="container mt-5 doctor">
                <Link to="/adddoctor" className='btn btn-success mb-3'>Add Doctor +</Link>
                <h1 className="text-center mb-4">Doctors List</h1>
                <div className="row">
                    {doctors.map((doctor) => (
                        <div className="col-md-4 mb-4" key={doctor.id}>
                            <div className="card shadow-sm border-light rounded">
                                <img 
                                    src={`http://localhost:3006/uploads/${doctor.image}`} 
                                    className="card-img-top" 
                                    alt={doctor.name} 
                                    style={{ height: '200px', objectFit: 'cover' }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Dr: {doctor.name}</h5>
                                    <p className="card-text">
                                        <strong>Qualification:</strong> {doctor.qualification}<br />
                                        <strong>Gender:</strong> {doctor.gender}<br />
                                        <strong>Duty Time:</strong> {doctor.duty_time}<br />
                                        <strong>Salary:</strong> ${doctor.scalary}<br />
                                        <strong>Room:</strong> {doctor.room}
                                    </p>
                                    <button className='btn btn-danger w-100' onClick={() => handleDelete(doctor.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Doctor;
