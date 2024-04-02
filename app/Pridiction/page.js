"use client"
import React, { useState } from 'react';
import Navbar from '../pages/Navbar';

const Page = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=2VPJ28CTFE8EW6RTBK8PULF4Y&contentType=json&include=current,alerts`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div>
            <Navbar />
            <h2>Enter Location and Get Weather</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={handleLocationChange}
                        required
                    />
                </div>
                <button type="submit">Get Weather</button>
            </form>
            {weatherData && (
                <div>
                    <h3>Weather Data for {location}:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Temperature</th>
                                <th>Conditions</th>
                                {/* Add more table headers for additional data */}
                            </tr>
                        </thead>
                        <tbody>
                            {weatherData.days.map((day, index) => (
                                <tr key={index}>
                                    <td>{day.datetime}</td>
                                    <td>{day.temp}</td>
                                    <td>{day.conditions}</td>
                                    {/* Add more table cells for additional data */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default Page;
