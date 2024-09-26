import React, { useState } from 'react';
import './chat.css';

const Chat: React.FC = () => {
  const [mensagem, setMensagem] = useState('');
  const [conversas, setConversas] = useState([{ remetente: 'Ivy', texto: 'Olá, eu sou a Ivy e estou aqui para te ajudar!' }]);

  const handleEnviarMensagem = (event: React.FormEvent) => {
    event.preventDefault();

    if (mensagem.trim() !== '') {
      const novaConversa = { remetente: 'Você', texto: mensagem };
      setConversas([...conversas, novaConversa]);
      setMensagem('');

      setTimeout(() => {
        const respostaIvy = { remetente: 'Ivy', texto: 'Estou aqui para ajudar, como posso assisti-lo?' };
        setConversas(prevConversas => [...prevConversas, respostaIvy]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {conversas.map((conversa, index) => (
          <div key={index} className={`mensagem ${conversa.remetente === 'Você' ? 'usuario' : 'ivy'}`}>
            <strong>{conversa.remetente}: </strong> {conversa.texto}
          </div>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleEnviarMensagem}>
        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="input-mensagem"
          required
        />
        <button type="submit" className="botao-enviar">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
