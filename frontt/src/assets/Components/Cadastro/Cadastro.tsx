import React, { useState } from 'react';
import './Cadastro.css';

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [veiculo, setVeiculo] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Cadastro realizado:', { nome, email, senha, dataNascimento, veiculo });
    setNome('');
    setEmail('');
    setSenha('');
    setDataNascimento('');
    setVeiculo('');
  };

  return (
    <div className="cadastro">
      <img src="/azul.png" alt="Logo" className="logo" />
      <h2>Cadastrar</h2>
      <form onSubmit={handleSubmit} className="formulario-cadastro">
        <div className="grupo-formulario">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="veiculo">Veículo:</label>
          <input
            type="text"
            id="veiculo"
            value={veiculo}
            onChange={(e) => setVeiculo(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="botao-enviar">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
