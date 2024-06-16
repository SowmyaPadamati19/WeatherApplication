// src/components/SearchBar.js
import React, { useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                style={styles.input}
            />
            <button type="submit" style={styles.button}>Search</button>
            <FaMicrophone style={styles.icon} />
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginRight: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#61dafb',
        cursor: 'pointer',
    },
    icon: {
        marginLeft: '10px',
        fontSize: '24px',
        cursor: 'pointer',
    }
};

export default SearchBar;
