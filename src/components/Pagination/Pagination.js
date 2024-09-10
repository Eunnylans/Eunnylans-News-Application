import React from "react";
import "./Pagination.css";

const Pagination = ({ page, nextPage, prevPage }) => {
  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;