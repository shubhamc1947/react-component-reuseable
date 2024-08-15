import React, { useEffect } from 'react';
import './TwinklingStars.scss';

const TwinklingStars = () => {
  useEffect(() => {
    const starBackground = document.querySelector('.star-background');
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.classList.add('twinkling-star');
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starBackground.appendChild(star);
    }
  }, []);

  return <div className="star-background"></div>;
};

export default TwinklingStars;
