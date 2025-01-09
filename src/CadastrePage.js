import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';


class CadastrePage extends React.Component {
render() {
  return (
    <div className="page">
      <Header />
      <main>
        <div className='card-login'>
            <input type="text" placeholder='Primeiro Nome'/>
            <input type="text" placeholder='Último Nome'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirmar Senha" />
            <button>Cadastrar</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
}

export default CadastrePage;