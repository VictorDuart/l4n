import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';


class LoginPage extends React.Component {
render() {
  return (
    <div className="page">
      <Header />
      <main>
        <div className='card-login'>
            <p>Novo usuário? <span><a>Cadastre-se aqui</a></span></p>
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
            <button>Entrar</button>
            <p>Esqueceu sua senha? <span><a>Clique aqui</a></span></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
}

export default LoginPage;