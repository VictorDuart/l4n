import React from 'react';
import './App.css';
import logo from './logo.png';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage'; // Importe o seu componente LoginPage

function Header() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo"/>
          <h1>l4n.<span className="color-green">bet</span></h1>
        </div>
        <div className="button-container">
          <button className="header-button">Botão 1</button>
          <button className="header-button">Botão 2</button>
          <button className="header-button">Botão 3</button>
        </div>
        <div className="button-container-login">
          <button className="header-button">Registre-se</button>
          <button className="header-button-login" onClick={handleLoginClick}>Login</button>
        </div>
      </header>
    );
    }
    
export default Header;
    