import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieList from 'components/MovieList';
import { fetchTrendMovies } from 'fetchAPI';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const movieTrending = async () => {
      try {
        const { results } = await fetchTrendMovies();
        setTrendMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieTrending();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={trendMovies} />
    </div>
  );
};

export default Home;
