
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
    const [formData, setFormData] = useState({
        patient_name: '',
        age: '',
        gender: '',
        phone: '',
        address: '',
        app_with_doc: '',
        fee: ''
    });

    const navigate = useNavigate(); 

    const doctorFees = {
        '1': 134,
        '2': 200,
        '3': 250
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // If doctor is selected, set the fee based on the selected doctor
        if (name === 'app_with_doc') {
            setFormData({ ...formData, [name]: value, fee: doctorFees[value] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3006/patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Patient record added successfully!');
                navigate('/'); // Redirect to the home route
            } else {
                alert('Failed to add patient record.');
            }
        } catch (error) {
            console.error('Error adding patient record:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Add Patient Record</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Patient Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="patient_name" 
                        value={formData.patient_name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="age" 
                        value={formData.age} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select 
                        className="form-select" 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input 
                        type="tel" 
                        className="form-control" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Appointment With Doctor</label>
                    <select 
                        className="form-select" 
                        name="app_with_doc" 
                        value={formData.app_with_doc} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Doctor</option>
                        <option value="1">Doctor 1</option>
                        <option value="2">Doctor 2</option>
                        <option value="3">Doctor 3</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fee</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="fee" 
                        value={formData.fee} 
                        onChange={handleChange} 
                        readOnly 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Patient</button>
            </form>
        </div>
    );
};

export default AddPatient;
