import React, { useEffect } from 'react';
import './FloatingBubbles.scss';

const FloatingBubbles = () => {
  useEffect(() => {
    const particleContainer = document.querySelector('.bubble-container');
    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.width = `${Math.random() * 10 + 10}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      particleContainer.appendChild(bubble);
    }
  }, []);

  return <div className="bubble-container"></div>;
};

export default FloatingBubbles;
