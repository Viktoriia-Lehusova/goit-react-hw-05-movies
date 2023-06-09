import { fetchMovieCast } from '../../fetchAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Box } from '../../pages/Home/Home.styled';
import {
  StyledList,
  StyledItem,
  StyledImg,
  StyledTitle,
  StyledSubtitle,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  const img_url = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const movieCast = async () => {
      setLoading(true);
      try {
        const { cast } = await fetchMovieCast(movieId);
        if (cast.length === 0) {
          setIsEmpty(true);
        }
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Box> {Loader()} </Box>}
      <StyledList>
        {cast.map(({ id, profile_path, name, character }) => (
          <StyledItem key={id}>
            <StyledImg src={img_url + profile_path} alt="" />
            <StyledTitle>{name}</StyledTitle>
            <StyledSubtitle>{character}</StyledSubtitle>
          </StyledItem>
        ))}
      </StyledList>
      {error && <h2>Something went wrong. Try again.</h2>}
      {isEmpty && <h1> Sorry, we dont have this information.</h1>}
    </div>
  );
};

export default Cast;
