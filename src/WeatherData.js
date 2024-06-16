// src/data/weatherData.js
const weatherData = {
    'Mumbai': {
        name: 'New York',
        weather: [{ description: 'clear sky' }],
        main: { temp: 36, humidity: 65 },
        wind: { speed: 5 }
    },
    'Karnataka': {
        name: 'London',
        weather: [{ description: 'mist' }],
        main: { temp: 40, humidity: 80 },
        wind: { speed: 3 }
    },
    'Hyderabad': {
        name: 'Hyderabad',
        weather: [{ description: 'cloudy' }],
        main: { temp: 38, humidity: 70 },
        wind: { speed: 4 }
    }
    // Add more cities as needed
};

export default weatherData;
