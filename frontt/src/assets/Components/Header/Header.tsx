import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      {isMenuOpen && (
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cadastro">Criar Conta</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/chat">Chat</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
