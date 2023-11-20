import './App.css';
import {getMovieList, searchMovie} from "./api"
import {useEffect} from "react"
const App = () => {
  useEffect(() => {
    getMovieList()
  })
  const search = (q) => {
    console.log({q})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ansal Movie</h1>
        <div className="Movie-container">
          <input placeholder="cari movie ..." className="Movie-search"
          onChange={({target}) => search(target.value)}
          />
          
          <div className="Movie-wrapper">
            <div className="Movie-title">judul film</div>
            <img className="Movie-image" src=" "/>
            <div className="Movie-date">11-11-2023</div>
            <div className="Movie-rate">8.7</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
