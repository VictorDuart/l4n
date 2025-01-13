import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
import LoginPage from "./LoginPage.js";
import CadastrePage from "./CadastrePage.js";
import WalletPage from "./WalletPage.js";
import WithdrawPage from "./WithdrawPage.js";
import DepositPage from "./DepositPage.js";
import BetsPage from "./BetsPage.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastre" element={<CadastrePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/bets" element={<BetsPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
