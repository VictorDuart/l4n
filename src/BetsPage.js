import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function BetsPage() {
  const [activeTab, setActiveTab] = useState("open");

  return (
    <div className="page">
      <Header />
      <main>
        <div className="card-bets">
          <div className="tabs">
            <button
              className={activeTab === "open" ? "active" : ""}
              onClick={() => setActiveTab("open")}
            >
              Apostas Abertas
            </button>
            <button
              className={activeTab === "resolved" ? "active" : ""}
              onClick={() => setActiveTab("resolved")}
            >
              Apostas Resolvidas
            </button>
          </div>
          <div className="tab-content">
            {activeTab === "open" && (
              <div className="container-bets">
                <div className="bet">
                  <div className="bet-header">
                    <h3>Simples R$190,50</h3>
                    <p>Odd: 12.48</p>
                  </div>
                  <p>Time 1 - Time 2</p>
                  <hr className="divisor" />
                  <div className="bet-header">
                    <h3>Empate</h3>
                    <p>Odd: 3.2</p>
                  </div>
                  <div className="bet-header">
                    <h3>Time 1 ter jogador expulso</h3>
                    <p>Odd: 3.9</p>
                  </div>
                  <hr className="divisor" />
                  <div className="bet-header">
                    <h3>Total</h3>
                    <p>R$ 2.377,44</p>
                  </div>
                </div>
                <div className="bet">
                  <div className="bet-header">
                    <h3>Simples R$231,50</h3>
                    <p>Odd: 3.1</p>
                  </div>
                  <p>Time 1 - Time 2</p>
                  <hr className="divisor" />
                  <div className="bet-header">
                    <h3>Time 2 ganhar</h3>
                    <p>Odd: 3.1</p>
                  </div>
                  <hr className="divisor" />
                  <div className="bet-header">
                    <h3>Total</h3>
                    <p>R$ 717,65</p>
                  </div>
                </div>
                <div className="bet">
                  <div className="bet-header">
                    <h3>Simples R$10,50</h3>
                    <p>Odd: 2.28</p>
                  </div>
                  <p>Time 1 - Time 2</p>
                  <hr className="divisor" />
                  <div className="bet-header">
                    <h3>Time 1 ganhar</h3>
                    <p>Odd: 1.2</p>
                  </div>
                  <div className="bet-header">
                    <h3>Time 2 receber mais de 1 cartão amarelo</h3>
                    <p>Odd: 1.9</p>
                  </div>
                  <hr className="divisor" />
                  <div className="bet-header">
                    <h3>Total</h3>
                    <p>R$ 23,94</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "resolved" && (
              <div className="container-bets">
                <div className="bet">
                  <div className="bet-header">
                    <h3>Simples R$1.000,00</h3>
                    <p>Odd: 1.48</p>
                  </div>
                  <div className="bet-header">
                    <h3>Time 1 - Time 2</h3>
                    <span className="icon icon-won">✔</span>
                  </div>
                  <hr className="divisor" />
                  <div className="bet-header">
                    <h3>Time 1 ganhar</h3>
                    <p>Odd: 1.38</p>
                  </div>
                  <hr className="divisor" />
                  <div className="bet-header">
                    <h3>Total</h3>
                    <p>R$ 1.480,00</p>
                  </div>
                </div>
                <div className="bet">
                  <div className="bet-header">
                    <h3>Simples R$50,00</h3>
                    <p>Odd: 3.1</p>
                  </div>
                  <div className="bet-header">
                    <h3>Time 1 - Time 2</h3>
                    <span className="icon icon-lost">✘</span>
                  </div>
                  <hr className="divisor" />
                  <div className="bet-header">
                    <h3>Time 2 ganhar</h3>
                    <p>Odd: 3.1</p>
                  </div>
                  <hr className="divisor" />
                  <div className="bet-header">
                    <h3>Total</h3>
                    <p>R$ 155,00</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BetsPage;
