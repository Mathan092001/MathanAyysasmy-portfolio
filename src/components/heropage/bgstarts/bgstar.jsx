// StarField.jsx
import React, { useEffect, useRef } from 'react';
import './StarField.css';

const StarField = ({ starCount = 100 }) => {
  const containerRef = useRef(null);

  // Helper to create stars
  const createStars = () => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';
    const { clientWidth, clientHeight } = container;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * clientHeight}px`;
      star.style.left = `${Math.random() * clientWidth}px`;
      star.style.animationDuration = `${1.5 + Math.random()}s`;
      container.appendChild(star);
    }
  };

  useEffect(() => {
    createStars();
    const handleResize = () => {
      createStars();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line
  }, [starCount]);

  return (
    <div
      ref={containerRef}
      className="star-field"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
};

export default StarField;