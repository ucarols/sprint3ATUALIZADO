import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Login realizado:', { email, senha });
    setEmail('');
    setSenha('');
  };

  return (
    <div className="login">
      <img src="/azul.png" alt="Logo" className="logo" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="formulario-login">
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
        <button type="submit" className="botao-enviar">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
