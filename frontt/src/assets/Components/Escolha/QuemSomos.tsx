import React from 'react';
import './QuemSomos.css';

const QuemSomos: React.FC = () => {
  return (
    <div id="about" className="secao-quem-somos">
      <h2>Quem Somos</h2>
      <p>Somos uma equipe dedicada a fornecer soluções para o seu carro na palma da sua mão.</p>
      <p>Nossa missão é garantir que você tenha sempre a melhor assistência e suporte para seu veículo.</p>
      
      <h3>Conheça nossa equipe</h3>
      <div className="container-equipe">
        <div className="membro-equipe">
          <img src="/cacos.PNG" alt="Membro 1" className="foto-membro" />
          <strong>Caroline de Oliveira</strong>
          <div>RM: 559123</div>
        </div>
        <div className="membro-equipe">
          <img src="/giulia.jpg" alt="Membro 2" className="foto-membro" />
          <strong>Giulia Correa Camillo</strong>
          <div>RM: 554473</div>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
