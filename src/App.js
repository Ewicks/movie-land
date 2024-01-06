import './App.css';
import { useEffect } from 'react';

// 8d2475b6

const API_URL = 'http://www.omdbapi.com?apikey=8d2475b6'

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
    <h1>App</h1>
  );
}

export default App;
