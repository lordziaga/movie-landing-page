import './App.css';
import React, { useState, useEffect } from 'react';
import { getMovieList, searchMovie } from './api';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getMovieList()
      .then((result) => setMovieList(result))
      .catch((error) => console.error('Error loading popular movies:', error));
  }, []);

  const handleSearch = async () => {
    try {
      const searchResults = await searchMovie(searchQuery);
      setMovieList(searchResults);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ansal Punya Film</h1>
        <input className="Movie-search"
          type="text"
          placeholder="Ketik untuk Cari Film . . ."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="Movie-container">
          {movieList.map((movie) => (
            <div className="Movie-wrapper" key={movie.id}>
              <div className="Movie-title">{movie.title}</div>
              <img className="Movie-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="Movie-date">{movie.release_date}</div>
              <div className="Movie-rate">{movie.vote_average}</div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
