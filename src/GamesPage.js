import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function GamesPage() {
  const navigate = useNavigate();
  const games = [
    {
      id: 1,
      team1: "Time A",
      team2: "Time B",
      date: "2023-10-01",
      time: "18:00",
    },
    {
      id: 2,
      team1: "Time C",
      team2: "Time D",
      date: "2023-10-02",
      time: "20:00",
    },
    {
      id: 3,
      team1: "Time E",
      team2: "Time F",
      date: "2023-10-02",
      time: "20:00",
    },
    {
      id: 4,
      team1: "Time E",
      team2: "Time F",
      date: "2023-10-02",
      time: "20:00",
    },
    // Adicione mais jogos conforme necessário
  ];

  const handleCardClick = (gameId) => {
    navigate(`/game/${gameId}`);
  };

  return (
    <div className="page">
      <Header />
      <main>
        <div className="card-games">
          {games.map((game) => (
            <div
              key={game.id}
              className="card"
              onClick={() => handleCardClick(game.id)}
            >
              <div className="game-info">
                <h3>
                  {game.team1} vs {game.team2}
                </h3>
                <p>
                  {game.date} - {game.time}
                </p>
              </div>

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
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GamesPage;
