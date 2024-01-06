import './App.css';
import { useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// 8d2475b6

const API_URL = 'http://www.omdbapi.com?apikey=8d2475b6'

const movie1 = {Title: 'Superman, Spiderman or Batman', Year: '2011', imdbID: 'tt2084949', Type: 'movie', Poster: 'N/A'}


const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, [])




  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for movies' value={'superman'} onChange={() => {}}/>
        <img src={SearchIcon} alt='search' onClick={() => {}} />
      </div>

      <div className='container'>
        <MovieCard movie1={movie1} />
      </div>

    </div>
  );
}

export default App;
