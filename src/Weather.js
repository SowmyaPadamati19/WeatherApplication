// src/components/Weather.js
import React from 'react';

const Weather = ({ data }) => {
    if (!data) {
        return null;
    }

    const { name, weather, main, wind } = data;

    return (
        <div style={styles.container}>
            <h2>{name}</h2>
            <p>{weather[0].description}</p>
            <p>Temperature: {main.temp}°C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {wind.speed} m/s</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '5px',
        backgroundColor: '#fff',
        width: '224px',
        padding: '10px',
        borderRadius:'18px',
        opacity:'0.8'
    }

};

export default Weather;
