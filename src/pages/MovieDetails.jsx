import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../fetchAPI';
import MovieItem from '../components/MovieItem';
import { Loader } from '../components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieById = async () => {
      setLoading(true);
      try {
        const results = await fetchMovieDetails(movieId);
        if (results.length === 0) {
          setIsEmpty(true);
        }
        setMovie(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieById();
  }, [movieId]);

  return (
    <div>
      {loading && <div> {Loader()} </div>}
      <MovieItem movie={movie} genres={movie.genres} />;
      {error && <h2>Something went wrong. Try again.</h2>}
      {isEmpty && <h1> Sorry. There are no movies by your query</h1>}
    </div>
  );
};

export default MovieDetails;
