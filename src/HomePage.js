import React from 'react';
import './HomePage.css';
import logo from './logo.png';

class HomePage extends React.Component {
render() {
  return (
    <div className="homepage">
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
          <button className="header-button-login">Login</button>
        </div>
      </header>
      <main>
      <div className="card-container">
        <div className="card"> 
          <h3>Hoje | 16:00</h3>
          <h2 class="time1">Time 1</h2>
          <h2 class="time2">Time 2</h2>
          <div className="inner-card-container">
            <button className="inner-card">
              <div class="text-left">1</div>
              <div class="text-right">1.19</div>
            </button>
            <button className="inner-card">
              <div class="text-left">X</div>
              <div class="text-right">2.50</div>
            </button>
            <button className="inner-card">
              <div class="text-left">2</div>
              <div class="text-right">4.90</div>
            </button>
          </div>
        </div>
        <div className="card">
        <h3>Hoje | 16:00</h3>
          <h2 class="time1">Time 1</h2>
          <h2 class="time2">Time 2</h2>
          <div className="inner-card-container">
            <button className="inner-card">
              <div class="text-left">1</div>
              <div class="text-right">1.19</div>
            </button>
            <button className="inner-card">
              <div class="text-left">X</div>
              <div class="text-right">2.50</div>
            </button>
            <button className="inner-card">
              <div class="text-left">2</div>
              <div class="text-right">4.90</div>
            </button>
          </div>
        </div>
        <div className="card">
        <h3>Hoje | 16:00</h3>
          <h2 class="time1">Time 1</h2>
          <h2 class="time2">Time 2</h2>
          <div className="inner-card-container">
            <button className="inner-card">
              <div class="text-left">1</div>
              <div class="text-right">1.19</div>
            </button>
            <button className="inner-card">
              <div class="text-left">X</div>
              <div class="text-right">2.50</div>
            </button>
            <button className="inner-card">
              <div class="text-left">2</div>
              <div class="text-right">4.90</div>
            </button>
          </div>
        </div>
      </div>
      </main>
      <footer>
        <p>© 2022 Nossa Empresa</p>
      </footer>
    </div>
  );
}
}

export default HomePage;