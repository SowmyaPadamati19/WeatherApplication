// src/App.js
import React, { useState } from 'react';
import Header from './Header';
import Weather from './Weather';
import weatherData from './WeatherData';
import './App.css';
import Realtime from './Realtime';
import TextArea from './TextArea';

const App = () => {
    const [weather, setWeather] = useState(null);

    const handleSearch = (city) => {
        const data = weatherData[city];
        if (data) {
            setWeather(data);
        } else {
            setWeather({ name: 'Not Found', weather: [{ description: 'N/A' }], main: { temp: 'N/A', humidity: 'N/A' }, wind: { speed: 'N/A' } });
        }
    };
    const backgroundUrl = 'https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif'; 
    return (
        <div className="App" style={{
            backgroundImage: `url(${backgroundUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000', // Set text color to contrast with background
        }}>
            <Header onSearch={handleSearch} />  {/* Pass handleSearch to Header */}
            <Weather data={weather} />
            <Realtime />
            <TextArea />
        </div>
    );
};

export default App;
