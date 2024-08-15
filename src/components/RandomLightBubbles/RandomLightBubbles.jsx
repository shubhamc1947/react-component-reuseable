import React, { useEffect } from 'react';
import './RandomLightBubbles.scss';

const RandomLightBubbles = () => {
  useEffect(() => {
    const bubbleContainer = document.querySelector('.bubble-container');
    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.top = `${Math.random() * 100}vh`;
      bubble.style.width = `${Math.random() * 15 + 5}px`; // Random size between 10px and 30px
      bubble.style.height = bubble.style.width;
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      bubbleContainer.appendChild(bubble);
    }
  }, []);

  return <div className="bubble-container"></div>;
};

export default RandomLightBubbles;
