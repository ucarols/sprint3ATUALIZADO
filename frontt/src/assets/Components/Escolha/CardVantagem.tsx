import React from 'react';
import './cardVantagem.css'; 

interface CardVantagemProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CardVantagem: React.FC<CardVantagemProps> = ({ title, description, image, link }) => {
  return (
    <div className="cardVantagem">
      <img src={image} alt={`Descrição da ${title}`} />
      <h3>{title}</h3>
      <p className="descricao">{description}</p>
      <a href={link} className="saibaMais">Saiba mais</a>
    </div>
  );
};

export default CardVantagem;
