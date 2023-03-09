import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatBot = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('message', (msg) => {
        setMessages((prevMessages) => [...prevMessages, { text: msg, sender: 'bot' }]);
      });
    }
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      socket.emit('message', inputValue);
    }
  };

  return (
    <div>
      <div style={{ height: '400px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div key={index}>
            <b>{message.sender === 'user' ? 'You' : 'Bot'}:</b> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
