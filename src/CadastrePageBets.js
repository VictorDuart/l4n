import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function CadastrePageBets() {
  const { gameId } = useParams();
  const [selectedBets, setSelectedBets] = useState([]);
  const [betAmount, setBetAmount] = useState("");

  const bets = [
    { id: 1, description: "Time 1 ganha", odds: 1.5 },
    { id: 2, description: "Empate", odds: 3.0 },
    { id: 3, description: "Time 2 ganha", odds: 2.5 },
    { id: 4, description: "Mais de 2.5 gols", odds: 1.8 },
    { id: 5, description: "Menos de 2.5 gols", odds: 2.0 },
    // Adicione mais possibilidades de apostas conforme necessário
  ];

  const handleBetClick = (bet) => {
    setSelectedBets((prevSelectedBets) =>
      prevSelectedBets.includes(bet.id)
        ? prevSelectedBets.filter((b) => b !== bet.id)
        : [...prevSelectedBets, bet.id]
    );
  };

  const handleBetAmountChange = (event) => {
    setBetAmount(event.target.value);
  };

  const handleConfirmBet = () => {
    if (selectedBets.length > 0 && betAmount) {
      alert(
        `Apostas confirmadas: ${selectedBets
          .map((bet) => bet.description)
          .join(", ")} - Valor: R$ ${betAmount}`
      );
      // Aqui você pode adicionar a lógica para salvar a aposta no backend
    } else {
      alert("Por favor, selecione uma ou mais apostas e insira um valor.");
    }
  };

  return (
    <div className="page">
      <Header />
      <main>
        <div className="card-bets">
          <h1>Cadastre sua Aposta</h1>
          <h2>Jogo ID: {gameId}</h2>
          <div className="bets-container">
            {bets.map((bet) => (
              <div
                key={bet.id}
                className={`bet-option ${
                  selectedBets.includes(bet.id) ? "selected" : ""
                }`}
                onClick={() => handleBetClick(bet)}
              >
                <p>{bet.description}</p>
                <p>Odds: {bet.odds}</p>
              </div>
            ))}
          </div>
          <div className="bet-amount-container">
            <label htmlFor="betAmount">Valor da Aposta (R$):</label>
            <input
              type="number"
              id="betAmount"
              value={betAmount}
              onChange={handleBetAmountChange}
            />
          </div>
          <button className="confirm-bet-button" onClick={handleConfirmBet}>
            Confirmar Aposta
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CadastrePageBets;
