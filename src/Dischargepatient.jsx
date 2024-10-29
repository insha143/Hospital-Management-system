import React from 'react';
import { useLocation } from 'react-router-dom';

const Dischargepatient = () => {
    const location = useLocation();
    const { dischargedPatient } = location.state || { dischargedPatient: null };

    return (
        <div className="container mt-5">
            <h4 className="text-center">Discharged Patient Details</h4>
            {dischargedPatient ? (
                <div>
                    <p><strong>Patient Name:</strong> {dischargedPatient.patient_name}</p>
                    <p><strong>Age:</strong> {dischargedPatient.age}</p>
                    <p><strong>Gender:</strong> {dischargedPatient.gender}</p>
                    <p><strong>Phone No:</strong> {dischargedPatient.phone}</p>
                    <p><strong>Address:</strong> {dischargedPatient.address}</p>
                    <p><strong>Appointment With:</strong> {dischargedPatient.app_with_doc}</p>
                    <p><strong>Fee:</strong> {dischargedPatient.fee}</p>
                </div>
            ) : (
                <p>No patient data available.</p>
            )}
        </div>
    );
};

export default Dischargepatient;
