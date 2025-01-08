import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.js';

class App extends React.Component {
render() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* outras rotas podem ir aqui */}
      </Routes>
    </BrowserRouter>
  );
}
}

export default App;