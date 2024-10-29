import React, { useEffect, useState } from 'react';

const Patnur = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch('http://localhost:3006/search');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSearchResults(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Patient Under Supervision of </h1>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Duty Time</th>
                        <th>Phone</th>
                        <th>Duty Area</th>
                        <th>Gender</th>
                        <th>Patient Name</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((result, index) => (
                        <tr key={index}>
                            <td>{result.name}</td>
                            <td>{result.duty_time}</td>
                            <td>{result.phone}</td>
                            <td>{result.duty_area}</td>
                            <td>{result.gender}</td>
                            <td>{result.patient_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Patnur;

 