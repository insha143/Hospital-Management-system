import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [patientName, setPatientName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [doctorId, setDoctorId] = useState('');
    const [fee, setFee] = useState(0);
    const [description, setDescription] = useState('');

    const doctorFees = {
        1: 100,
        2: 150,
        3: 200,
    };

    const handleDoctorChange = (e) => {
        const id = e.target.value;
        setDoctorId(id);
        setFee(doctorFees[id] || 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const appointmentData = {
            patient_name: patientName,
            age: age,
            gender: gender,
            phone: phone,
            address: address,
            app_with_doc: doctorId,
            fee: fee,
        };

        try {
            const response = await fetch('http://localhost:3006/patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointmentData),
            });
            if (response.ok) {
                console.log('Appointment booked successfully!');
            } else {
                console.error('Error booking appointment');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

  return (
    <div>
    
   
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
        <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
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
                        <a href="/about" className="dropdown-item">Our Doctor</a>
                        <a href="/" className="dropdown-item">Appointment</a>
                        <a href="/" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                <Link to="/dishboard" className="nav-item nav-link">Dashboard</Link>
            </div>
            <Link to="/" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>

    <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                <h1 className="display-4 text-white mb-5">Good Health Is The Root Of All Heppiness</h1>
                <div className="row g-4">
                    <div className="col-sm-4">
                        <div className="border-start border-light ps-4">
                            <h2 className="text-white mb-1" data-toggle="counter-up">123</h2>
                            <p className="text-light mb-0">Expert Doctors</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="border-start border-light ps-4">
                            <h2 className="text-white mb-1" data-toggle="counter-up">1234</h2>
                            <p className="text-light mb-0">Medical Stuff</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="border-start border-light ps-4">
                            <h2 className="text-white mb-1" data-toggle="counter-up">12345</h2>
                            <p className="text-light mb-0">Total Patients</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="owl-carousel header-carousel">
                    <div className="owl-carousel-item position-relative">
                        {/* <img className="img-fluid" src="img/carousel-1.jpg" alt="doctor"/> */}
                        <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrvAnH8x8gRLqFn8FA0BMbruLuW03TLsVlDFBTbAryfo1ktNr1CEdZgpt8KdFMpzoXls&usqp=CAU" alt="doctor"/>

                        <div className="owl-carousel-text">
                            <h1 className="display-1 text-white mb-0 " >Cardiology</h1>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                        <div className="owl-carousel-text">
                            <h1 className="display-1 text-white mb-0">Neurology</h1>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="img/carousel-3.jpg" alt=""/>
                        <div className="owl-carousel-text">
                            <h1 className="display-1 text-white mb-0">Pulmonary</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex flex-column">
                        <img className="img-fluid rounded w-75 align-self-end" src="img/about-1.jpg" alt=""/>
                        <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src="img/about-2.jpg" alt="" style={{margintop:'-25%'}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p>
                    <h1 className="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth:'600px'}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
                <h1>Health Care Solutions</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:'65px' , height:'65px'}}>
                            <i className="fa fa-heartbeat text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Cardiology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:'65px', height:'65px'}}>
                            <i className="fa fa-x-ray text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Pulmonary</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:'65px' , height:'65px'}}>
                            <i className="fa fa-brain text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Neurology</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:'65px' , height:'65px'}}>
                            <i className="fa fa-wheelchair text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Orthopedics</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:'65px',height:'65px'}}>
                            <i className="fa fa-tooth text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Dental Surgery</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width:'65px' , height:'65px'}}>
                            <i className="fa fa-vials text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Laboratory</h4>
                        <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="p-lg-5 ps-lg-0">
                        <p className="d-inline-block border rounded-pill text-light py-1 px-4">Features</p>
                        <h1 className="text-white mb-4">Why Choose Us</h1>
                        <p className="text-white mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:'55px', height:'55px'}}>
                                        <i className="fa fa-user-md text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Experience</p>
                                        <h5 className="text-white mb-0">Doctors</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:'55px' ,height:'55px'}}>
                                        <i className="fa fa-check text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Quality</p>
                                        <h5 className="text-white mb-0">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:'55px', height:'55px'}}>
                                        <i className="fa fa-comment-medical text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Positive</p>
                                        <h5 className="text-white mb-0">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:'55px', height:'55px'}}>
                                        <i className="fa fa-headphones text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">24 Hours</p>
                                        <h5 className="text-white mb-0">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{minheight:'400px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{objectfit: 'cover'}} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth:'600px'}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
                <h1>Our Experience Doctors</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr Fatama</h5>
                            <p className="text-primary">Cardiology</p>
                            <div className="team-social text-center">
                                <Link className="btn btn-square" to="/"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square" to="/"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square" to="/"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr Kamran</h5>
                            <p className="text-primary">Dental Surgery</p>
                            <div className="team-social text-center">
                                <Link className="btn btn-square" to="/"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square" to="/"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square" to="/"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr Zuhera</h5>
                            <p className="text-primary">Neurology</p>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr Ikram</h5>
                            <p className="text-primary">Pulmonary</p>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="d-inline-block border rounded-pill py-1 px-4">Appointment</p>
                    <h1 className="mb-4">Make An Appointment To Visit Our Doctor</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:'55px', height:'55px'}}>
                            <i className="fa fa-phone-alt text-primary"></i>
                        </div>
                        <div className="ms-4">
                            <p className="mb-2">Call Us Now</p>
                            <h5 className="mb-0">+92 345 6789</h5>
                        </div>
                    </div>
                    <div className="bg-light rounded d-flex align-items-center p-5">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:'55px',height:'55px'}}>
                            <i className="fa fa-envelope-open text-primary"></i>
                        </div>
                        <div className="ms-4">
                            <p className="mb-2">Mail Us Now</p>
                            <h5 className="mb-0">info@example.com</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Patient Name"
                                style={{ height: '55px' }}
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <input
                                type="number"
                                className="form-control border-0"
                                placeholder="Age"
                                style={{ height: '55px' }}
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <select
                                className="form-select border-0"
                                style={{ height: '55px' }}
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            >
                                <option value="">Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Phone"
                                style={{ height: '55px' }}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Address"
                                style={{ height: '55px' }}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <select
                                className="form-select border-0"
                                style={{ height: '55px' }}
                                value={doctorId}
                                onChange={handleDoctorChange}
                                required
                            >
                                <option value="">Choose Doctor</option>
                                <option value="1">Dr Kamran</option>
                                <option value="2">Dr Ftama</option>
                                <option value="3">Dr Ikram</option>
                            </select>
                        </div>
                        <div className="col-12 col-sm-6">
                            <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Fee"
                                style={{ height: '55px' }}
                                value={`$${fee}`} // Display the fee
                                readOnly
                            />
                        </div>
                        <div className="col-12">
                            <textarea
                                className="form-control border-0"
                                rows="5"
                                placeholder="Describe your problem"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth:'600px'}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Testimonial</p>
                <h1>What Say Our Patients!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-1.jpg" style={{width:'100px', height:'100px'}}/>
                    <div className="testimonial-text rounded text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 className="mb-1">Patient Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-2.jpg" style={{width:'100px', height:'100px'}}/>
                    <div className="testimonial-text rounded text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 className="mb-1">Patient Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-3.jpg" style={{width:'100px', height:'100px'}}/>
                    <div className="testimonial-text rounded text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 className="mb-1">Patient Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
