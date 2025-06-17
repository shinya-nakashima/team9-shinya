import React, { useState, useRef, useEffect } from "react";
import "./PickupSlider.css";

const items = [1, 2, 3, 4, 5, 6];

const PickupSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(5);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  const cloneCount = 5;
  const slideWidthPercent = 25;

  const extendedItems = [
    ...items.slice(-cloneCount),
    ...items,
    ...items.slice(0, cloneCount),
  ];

  const prev = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const next = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!slideRef.current) return;
    slideRef.current.style.transition = isTransitioning
      ? "transform 0.3s ease"
      : "none";
    slideRef.current.style.transform = `translateX(-${
      currentIndex * slideWidthPercent
    }%)`;
  }, [currentIndex, isTransitioning]);

  const handleTransitionEnd = () => {
    if (!slideRef.current) return;
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(items.length);
    } else if (currentIndex === items.length + cloneCount) {
      setIsTransitioning(false);
      setCurrentIndex(cloneCount);
    } else {
      setIsTransitioning(true);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="pickup-container">
      {/* <h2 className="pickup-heading">
        ピックアップ
        <br />
        <small style={{ fontWeight: "normal", fontSize: 12 }}>pickup</small>
      </h2> */}

      <div className="pickup-slider-wrapper">
        <button
          onClick={prev}
          aria-label="Previous"
          className="pickup-slide-button"
          style={{ left: 5 }}
        >
          ‹
        </button>

        <div
          ref={slideRef}
          onTransitionEnd={handleTransitionEnd}
          className="pickup-slide-track"
          style={{
            width: `${extendedItems.length * slideWidthPercent}%`,
            transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
          }}
        >
          {extendedItems.map((item, i) => (
            <div
              key={i}
              className="pickup-slide-item"
              style={{ flex: `0 0 ${slideWidthPercent}%` }}
            >
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="pickup-slide-button"
          style={{ right: 5 }}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default PickupSlider;
