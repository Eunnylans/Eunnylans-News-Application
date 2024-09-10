import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Pagination from "./components/Pagination/Pagination";
//import Footer from "./components/Footer/Footer";

import "./App.css"; // Import global CSS

const API_URL = "https://api.thenewsapi.com/v1/news/top";
const API_TOKEN = "rrr7XMdgT0joRlp66Rx4PqRYouHgF8qJG2rxj6UG";


function App() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ category: 'business', country: 'us', searchTerm: '' });

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}?api_token=${API_TOKEN}&locale=${filters.country}&category=${filters.category}&q=${filters.searchTerm}&limit=3&page=${page}`
        );
        setNews(response.data.data);
      } catch (error) {
        console.error("Error fetching news", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [page, filters]); // Add filters to the dependency array

  const handleSearch = (searchTerm) => {
    setFilters(prevFilters => ({ ...prevFilters, searchTerm }));
  };

  const nextPage = () => setPage((prevPage) => prevPage + 1);
  const prevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="app-container">
    <Navbar setFilters={setFilters} handleSearch={handleSearch} /> {/* Pass handleSearch to Navbar */}
      {/* Only render the components if not loading */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
        <Carousel news={news} />
          <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
        </>
      )}
    </div>
  );
}

export default App;

