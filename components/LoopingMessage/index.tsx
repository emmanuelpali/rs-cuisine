"use client"
import React, { useState, useEffect } from 'react';
import './index.css'


interface VerticalLoopProps {
  messages: string[];
}

const VerticalLoop: React.FC<VerticalLoopProps> = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [messages]);

  const displayMessages = messages.map((message, index) => {
    const adjustedIndex = (index + currentMessageIndex) % messages.length;
    return (
      <div
        key={index}
        className={`message ${index === 0 ? 'visible' : ''}`}
      >
        <h2>{messages[adjustedIndex]}</h2>
      </div>
    );
  });

  return (
      <div className="vertical-loop">
          <h1>RS Cuisine</h1>
          {displayMessages}
      </div>
    );
};

export default VerticalLoop;
