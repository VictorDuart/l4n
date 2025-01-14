import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";

class HomePage extends React.Component {
  render() {
    const cardGames = [
      { id: 1, team1: "Time 1", team2: "Time 2", date: "Hoje", time: "16:00" },
      { id: 2, team1: "Time 3", team2: "Time 4", date: "Hoje", time: "18:00" },
      { id: 3, team1: "Time 5", team2: "Time 6", date: "Hoje", time: "20:00" },
    ];

    const mainGames = [
      { id: 1, team1: "Time 1", team2: "Time 2", date: "Hoje", time: "16:00" },
      { id: 2, team1: "Time 3", team2: "Time 4", date: "Hoje", time: "18:00" },
    ];

    return (
      <div className="page">
        <Header />
        <main>
          <div className="card-container">
            {cardGames.map((game) => (
              <div key={game.id} className="card">
                <h3>
                  {game.date} | {game.time}
                </h3>
                <h2 className="time1">{game.team1}</h2>
                <h2 className="time2">{game.team2}</h2>
                <div className="inner-card-container">
                  <button className="inner-card">
                    <div className="text-left">1</div>
                    <div className="text-right">1.19</div>
                  </button>
                  <button className="inner-card">
                    <div className="text-left">X</div>
                    <div className="text-right">2.50</div>
                  </button>
                  <button className="inner-card">
                    <div className="text-left">2</div>
                    <div className="text-right">4.90</div>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="main-container">
            <h1 className="title">
              <FontAwesomeIcon icon={faFutbol} /> Jogos ao Vivo
            </h1>
            <div className="game-container">
              {mainGames.map((game) => (
                <div key={game.id} className="game">
                  <h3>
                    {game.date} | {game.time}
                  </h3>
                  <h2 className="time1">{game.team1}</h2>
                  <h2 className="time2">{game.team2}</h2>
                  <div className="inner-card-container">
                    <button className="inner-card">
                      <div className="text-left">1</div>
                      <div className="text-right">1.19</div>
                    </button>
                    <button className="inner-card">
                      <div className="text-left">X</div>
                      <div className="text-right">2.50</div>
                    </button>
                    <button className="inner-card">
                      <div className="text-left">2</div>
                      <div className="text-right">4.90</div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
