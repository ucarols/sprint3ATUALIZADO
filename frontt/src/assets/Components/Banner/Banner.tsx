import React from 'react';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <div id="home" className="banner">
      <div className="conteudo-banner">
        <h1><strong>Problemas no Carro?</strong></h1>
        <p>
          ㅤA <span className="ivy">Ivy</span> te ajuda!
        </p>
        <p className="descricao">Descubra rapidamente o que há de errado com <br /> seu veículo. A Ivy analisa os sintomas e fornece uma avaliação em minutos.</p>
        <button className="botao-cta">Diagnosticar agora</button>
      </div>
    </div>
  );
};

export default Banner;
