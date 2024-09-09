import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true); // State to track if the carousel is open

  if (!news || news.length === 0) {
    return <div>Limits Reached</div>; // Handle case where news is empty or undefined
  }

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

  const currentNewsItem = news[currentIndex] || {}; // Ensure currentNewsItem is always defined

  return (
    isOpen && (
      <div className="carousel-container">
        <div className="carousel-header">
          <button className="close-button" onClick={handleClose}>
            &times; {/* Close Icon */}
          </button>
        </div>
        <div className="carousel-item">
          {currentNewsItem.image_url && (
            <img
              src={currentNewsItem.image_url}
              alt={currentNewsItem.title}
              className="news-image"
            />
          )}
          <h2 className="news-title">{currentNewsItem.title}</h2>
          <p className="news-description">{currentNewsItem.description}</p>
          {currentNewsItem.url && (
            <a
              href={currentNewsItem.url}
              className="read-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          )}
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
