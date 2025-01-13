import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const WalletPage = () => {
  const navigate = useNavigate();

  const handleWithdrawClick = () => {
    navigate("/withdraw");
  };

  const handleDepositClick = () => {
    navigate("/deposit");
  };

  return (
    <div className="page">
      <Header />
      <main>
        <div className="card-wallet">
          <div className="card-wallet-bets">
            <h1> Valor em Apostas </h1>
            <p> R$ 432,50</p>
          </div>
          <div className="card-wallet-balance">
            <h1> Saldo Atual </h1>
            <p> R$ 1.000,00</p>
          </div>
          <div className="button-container">
            <button
              className="card-wallet-button-deposit"
              onClick={handleDepositClick}
            >
              Depositar
            </button>
            <button
              className="card-wallet-button-withdraw"
              onClick={handleWithdrawClick}
            >
              Sacar
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WalletPage;
