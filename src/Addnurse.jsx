// src/AddNurse.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNurse = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
        duty_time: '',
        duty_area: '',
        role: ''
    });

    const navigate = useNavigate(); // Initialize the navigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3006/nurses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Nurse record added successfully!');
                navigate('/nurses'); 
            } else {
                alert('Failed to add nurse record.');
            }
        } catch (error) {
            console.error('Error adding nurse record:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Add Nurse Record</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
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
                    <label className="form-label">Duty Time</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="duty_time" 
                        value={formData.duty_time} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Duty Area</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="duty_area" 
                        value={formData.duty_area} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="role" 
                        value={formData.role} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Nurse</button>
            </form>
        </div>
    );
};

export default AddNurse;
