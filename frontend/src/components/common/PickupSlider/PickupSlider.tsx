import React, { useState, useRef, useEffect } from "react";
import "./PickupSlider.css";

const items = [1, 2, 3, 4, 5, 6];

const getSlideCount = (width: number) => {
  if (width < 640) return 1;      // モバイル
  if (width < 1024) return 2;     // タブレット
  if (width < 1280) return 3;     // ノートPC
  return 4;                       // デスクトップ
};

const PickupSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(getSlideCount(window.innerWidth));
  const slideRef = useRef<HTMLDivElement>(null);

  const slideWidthPercent = 100 / slidesToShow;
  const cloneCount = slidesToShow;

  const extendedItems = [
    ...items.slice(-cloneCount),
    ...items,
    ...items.slice(0, cloneCount),
  ];

  useEffect(() => {
    const handleResize = () => {
      const count = getSlideCount(window.innerWidth);
      setSlidesToShow(count);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  }, [currentIndex, isTransitioning, slideWidthPercent]);

  const handleTransitionEnd = () => {
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
