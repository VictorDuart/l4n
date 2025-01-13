import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import CadastrePage from './CadastrePage.js';
import WalletPage from './WalletPage.js';
import WithdrawPage from './WithdrawPage.js';

class App extends React.Component {
render() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastre" element={<CadastrePage />} />
        <Route path='/wallet' element={<WalletPage />} />
        <Route path='/withdraw' element={<WithdrawPage />} />
      </Routes>
    </BrowserRouter>
  );
}
}

export default App;