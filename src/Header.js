// // src/components/Header.js
// import React from 'react';

// const Header = () => {
//     return (
//         <header style={styles.header}>
//             <h1>Weather App</h1>
//         </header>
//     );
// };

// const styles = {
//     header: {
//         backgroundColor: '#282c34',
//         padding: '10px',
//         color: 'white',
//         textAlign: 'center',
//     }
// };

// export default Header;

// src/components/Header.js
import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from './SearchBar';  // Import the SearchBar component

export default function Header({ onSearch }) {
    return (
        <AppBar position="static"  style={{backgroundColor:'#001b71'}}>
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 , marginLeft:'20%', fontSize:'26px', fontWeight:600}}
                    
                >
                    Weather App
                </Typography>
                <SearchBar onSearch={onSearch} />  {/* Include the SearchBar component */}
            </Toolbar>
        </AppBar>
    );
}

