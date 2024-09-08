import React from "react";
import "./Carousel.css";

const Carousel = ({ news }) => {
  return (
    <div className="carousel-container">
      {news.map((article, index) => (
        <div key={index} className="carousel-item">
          <img src={article.image_url} alt={article.title} className="news-image" />
          <h2 className="news-title">{article.title}</h2>
          <p className="news-description">{article.description}</p>
          <a href={article.url} className="read-more" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
