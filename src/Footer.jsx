import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Address</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Hayatabad,Peshawar </p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+92 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social rounded-circle" to=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" to=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" to=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" to=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Services</h5>
                    <Link className="btn btn-link" to="">Cardiology</Link>
                    <Link className="btn btn-link" to="">Pulmonary</Link>
                    <Link className="btn btn-link" to="">Neurology</Link>
                    <Link className="btn btn-link" to="">Orthopedics</Link>
                    <Link className="btn btn-link" to="">Laboratory</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Quick Links</h5>
                    <Link className="btn btn-link" to="/about">About Us</Link>
                    <Link className="btn btn-link" to="/contact">Contact Us</Link>
                    <Link className="btn btn-link" to="services">Our Services</Link>
                    <Link className="btn btn-link" to="">Terms & Condition</Link>
                    <Link className="btn btn-link" to="">Support</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Newsletter</h5>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{maxwidth:'400px'}}>
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" to="#">UNIQUE Hospital</a>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                       
                        Designed By <a className="border-bottom" to="https://htmlcodex.com">MI developer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <a to="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>

    </div>
  )
}

export default Footer