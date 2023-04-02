import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendMovies } from '../../fetchAPI';
import { Loader } from '../../components/Loader/Loader';
import { StyledTitle, Box } from './Home.styled';

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
      <StyledTitle>Trending today</StyledTitle>
      {loading && <Box> {Loader()} </Box>}
      <MovieList movies={trendMovies} />
      {error && <h2>Something went wrong. Try again.</h2>}
      {isEmpty && <h1> Sorry. There are no images ... </h1>}
    </div>
  );
};

export default Home;
