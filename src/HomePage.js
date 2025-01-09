import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';
import Footer from './Footer';


class HomePage extends React.Component {
render() {
  return (
    <div className="page">
      <Header />
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
      <div className="main-container">
        <h1 className="title"><FontAwesomeIcon icon={faFutbol} /> Jogos ao Vivo</h1>
        <div className="game-container">
        <div className="game">
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
        <div className="game">
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
      </div>
      </main>
      <Footer />
    </div>
  );
}
}

export default HomePage;