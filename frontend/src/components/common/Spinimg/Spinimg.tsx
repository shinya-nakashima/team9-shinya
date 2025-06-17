// src/components/common/Header/Header.js
import React, { useState } from 'react';
import './Spinimg.css';


const Spinimg = () => {
  const slides = ['#666', '#888', '#aaa', '#999'];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const goToSlide = (index: React.SetStateAction<number>) => setCurrent(index);

  return (
    <div 
      className="simple-banner"
      style={{ backgroundColor: slides[current] }}
    >
      <div className="banner-content">
        <h2>バナー {current + 1}</h2>
      </div>
      
      <button 
        className="banner-arrow banner-arrow-left"
        onClick={prev}
      >
        &#8249;
      </button>
      
      <button 
        className="banner-arrow banner-arrow-right"
        onClick={next}
      >
        &#8250;
      </button>

      {/* ドットインジケーター */}
      <div className="banner-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`banner-dot ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Spinimg;

