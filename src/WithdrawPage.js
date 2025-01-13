import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

class WithdrawPage extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <main>
          <div className="card-wallet">
            <h1>Insira as informações de saque</h1>
            <p>
              Antes de fazer o saque, certifique-se de ter registrado seu CPF
              como chave Pix no seu aplicativo bancário
            </p>
            <div className="input-container">
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF"
              />
            </div>
            <div className="input-container">
              <div className="input-group">
                <div className="input-item">
                  <label htmlFor="firstName">Primeiro Nome:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Primeiro Nome"
                  />
                </div>
                <div className="input-item">
                  <label htmlFor="lastName">Último Nome:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Último Nome"
                  />
                </div>
              </div>
            </div>

            <p>
              Saldo disponível: <span className="color-green">R$ 1.000,00</span>
            </p>
            <div className="input-container">
              <label htmlFor="withdrawValue">Quantidade (BLR):</label>
              <input
                type="numeric"
                id="withdrawValue"
                name="withdrawValue"
                placeholder="Digite a quantidade"
              />
            </div>
            <button className="card-wallet-button-confirm">Confirmar</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default WithdrawPage;
