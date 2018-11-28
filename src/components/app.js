import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/Hamtaro.png';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to Hamtaro Land</h1>
        </div>
    </div>
);

export default App;
