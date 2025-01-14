import React from "react";
import "./App.css";
import logo from "./logo.png";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./LoginPage"; // Importe o seu componente LoginPage

function Header() {
  const navigate = useNavigate();

  const isLogged = true;

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleCadastreClick = () => {
    navigate("/cadastre");
  };

  const handleWalletClick = () => {
    navigate("/wallet");
  };

  const handleBetsClick = () => {
    navigate("/bets");
  };

  const handleGamesClick = () => {
    navigate("/games");
  };

  const handlleHomeClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>
          l4n.<span className="color-green">bet</span>
        </h1>
      </div>
      <div className="button-container">
        <button className="header-button" onClick={handlleHomeClick}>
          Início
        </button>
        <button className="header-button" onClick={handleBetsClick}>
          Apostas
        </button>
        <button className="header-button" onClick={handleGamesClick}>
          Jogos
        </button>
      </div>
      {isLogged ? (
        <div className="card-balance">
          <span>Saldo: R$ 1000,00</span>
          <button onClick={handleWalletClick}>Depósito</button>
        </div>
      ) : (
        <div className="button-container-login">
          <button className="header-button" onClick={handleCadastreClick}>
            Registre-se
          </button>
          <button className="header-button-login" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
