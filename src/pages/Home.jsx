import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import { fetchTrendMovies } from '../fetchAPI';
import { Loader } from '../components/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieTrending = async () => {
      setLoading(true);
      try {
        const { results } = await fetchTrendMovies();
        if (results.length === 0) {
          setIsEmpty(true);
        }
        setTrendMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieTrending();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {loading && <div> {Loader()} </div>}
      <MovieList movies={trendMovies} />
      {error && <h2>Something went wrong. Try again.</h2>}
      {isEmpty && <h1> Sorry. There are no images ... </h1>}
    </div>
  );
};

export default Home;
