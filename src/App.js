import './App.css';
import { getMovieList, searchMovie } from "./api"
import { useEffect, useState } from "react"

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
      getMovieList().then((result) => {
        setPopularMovies(result)
      })
    }, [])
        
  const PopularMovieList = () => {
    return popularMovies.map((movie) => (
      <div className="Movie-wrapper" key={movie.id}>
        <div className="Movie-title">{movie.title}</div>
        <img className="Movie-image" src={movie.poster_path} alt={movie.title} />
        <div className="Movie-date">{movie.release_date}</div>
        <div className="Movie-rate">{movie.vote_average}</div>
      </div>
    ));
  }

  const search = (query) => {
    console.log({ query });
    // Add logic to perform movie search and update state accordingly
  }

  // console.log({ popularMovies: popularMovies });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ansal Movie</h1>
        <input
          placeholder="cari movie ..."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  )
}

export default App;