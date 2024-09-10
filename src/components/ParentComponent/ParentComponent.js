import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Pagination from "../Pagination/Pagination";

const ParentComponent = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [interactionCount, setInteractionCount] = useState(0);
  const [page, setPage] = useState(1);
  const dailyLimit = 100;

  const nextPage = () => {
    if (interactionCount < dailyLimit && currentIndex < news.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setInteractionCount((prevCount) => prevCount + 1);
      setPage((prevPage) => prevPage + 1); // Increment page number
    }
  };

  const prevPage = () => {
    if (interactionCount < dailyLimit && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setInteractionCount((prevCount) => prevCount + 1);
      setPage((prevPage) => Math.max(prevPage - 1, 1)); // Decrement page but not below 1
    }
  };

  return (
    <div>
      {interactionCount >= dailyLimit ? (
        <h2>You have exceeded your daily limit.</h2>
      ) : (
        <>
          <Carousel news={news} currentIndex={currentIndex} />
          <Pagination 
            page={page} 
            nextPage={nextPage} 
            prevPage={prevPage} 
            interactionCount={interactionCount} 
            dailyLimit={dailyLimit} 
          />
        </>
      )}
    </div>
  );
};

export default ParentComponent;
