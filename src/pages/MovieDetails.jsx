import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'fetchAPI';
import MovieItem from 'components/MovieItem';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const movieById = async () => {
      try {
        const results = await fetchMovieDetails(movieId);
        setMovie(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieById();
  }, [movieId]);

  return <MovieItem movie={movie} genres={movie.genres} />;
};

export default MovieDetails;
