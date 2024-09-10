import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true); // State to track if the carousel is open

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === news.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClose = () => {
    setIsOpen(false); // Close the carousel when the close button is clicked
  };

  return (
    isOpen && (
      <div className="carousel-container">
        <div className="carousel-header">
          <button className="close-button" onClick={handleClose}>
            &times; {/* Close Icon */}
          </button>
        </div>
        <div className="carousel-item">
          <img
            src={news[currentIndex].image_url}
            alt={news[currentIndex].title}
            className="news-image"
          />
          <h2 className="news-title">{news[currentIndex].title}</h2>
          <p className="news-description">{news[currentIndex].description}</p>
          <a
            href={news[currentIndex].url}
            className="read-more"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>

        {/* Dot Navigation */}
        <div className="dots">
          {news.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    )
  );
};

export default Carousel;