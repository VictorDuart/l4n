import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';


class WalletPage extends React.Component {
render() {
  return (
    <div className="page">
      <Header />
      <main>
        <div className='card-wallet'>
            <div className='card-wallet-bets'>
                <h1> Valor em Apostas </h1>
                <p> R$ 432,50</p>
            </div>
            <div className='card-wallet-balance'>
                <h1> Saldo Atual </h1>
                <p> R$ 1.000,00</p>
            </div>
            <div className='button-container'>
                    <button className='card-wallet-button-deposit'>Depositar</button>
                    <button className='card-wallet-button-withdraw'>Sacar</button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
}

export default WalletPage;