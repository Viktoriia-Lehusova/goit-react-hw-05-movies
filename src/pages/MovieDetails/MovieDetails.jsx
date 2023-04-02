import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import { fetchMovieDetails } from '../../fetchAPI';
import MovieItem from '../../components/MovieItem/MovieItem';
import { Loader } from '../../components/Loader/Loader';
import { useRef } from 'react';
import { StyledTitle } from '../Movies/Movies.styled';
import { StyledLink } from './MovieDetails.styled';
import { Box } from '../Home/Home.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/movies');
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
      {loading && <Box> {Loader()} </Box>}
      <StyledLink to={backLocation.current}>
        <GoArrowLeft />
        Go back
      </StyledLink>
      <MovieItem movie={movie} genres={movie.genres} />;
      {error && <StyledTitle>Something went wrong. Try again.</StyledTitle>}
      {isEmpty && (
        <StyledTitle> Sorry. There are no movies by your query</StyledTitle>
      )}
    </div>
  );
};

export default MovieDetails;
