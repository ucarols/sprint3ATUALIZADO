import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/Components/Header/Header';
import Banner from './assets/Components/Banner/Banner';
import Vantagens from './assets/Components/Escolha/Vantagens';
import QuemSomos from './assets/Components/Escolha/QuemSomos';
import SecaoContato from './assets/Components/Contato/Contato';
import Footer from './assets/Components/Footer/Footer';
import Cadastro from './assets/Components/Cadastro/Cadastro';
import Login from './assets/Components/Login/Login';
import Chat from './assets/Components/Chat/Chat';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <Vantagens />
          <QuemSomos />
          <SecaoContato />
          <Footer />
        </>} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
