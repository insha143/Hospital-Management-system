import React, { useState } from 'react';
import './Adddoctor.css'; 
import { Link } from 'react-router-dom';

const AddDoctor = () => {
    const [formData, setFormData] = useState({
        name: '',
        qualification: '',
        gender: 'Male',
        duty_time: '',
        scalary: '',
        room: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] }); 
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        
        
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await fetch('http://localhost:3006/doctor', {
                method: 'POST',
                body: data, 
            });
            if (response.ok) {
                alert('Doctor added successfully!');
             
                setFormData({
                    name: '',
                    qualification: '',
                    gender: 'Male',
                    duty_time: '',
                    scalary: '',
                    room: '',
                    image: null
                });
            } else {
                const errorData = await response.json();
                console.error('Error details:', errorData);
                alert('Error adding doctor: ' + errorData.error || 'Unknown error');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form: ' + error.message);
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
    
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <h1 class="display-3 text-white mb-3 animated slideInDown">Add Doctors</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb text-uppercase mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="/">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="/">Pages</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">Doctors info</li>
                </ol>
            </nav>
        </div>
    </div>
        <div className="container mt-5">
            <div className="card shadow-lg p-4 mb-5 bg-light rounded">
                <h1 className="text-center mb-4">Doctor Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Qualification:</label>
                        <input type="text" name="qualification" className="form-control" value={formData.qualification} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gender:</label>
                        <select name="gender" className="form-select" value={formData.gender} onChange={handleChange} required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Duty Time:</label>
                        <input type="text" name="duty_time" className="form-control" value={formData.duty_time} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Salary:</label>
                        <input type="number" name="scalary" className="form-control" value={formData.scalary} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Room:</label>
                        <input type="text" name="room" className="form-control" value={formData.room} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image:</label>
                        <input type="file" name="image" className="form-control" accept="image/*" onChange={handleChange} required />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default AddDoctor;
