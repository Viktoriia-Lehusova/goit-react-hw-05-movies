import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../fetchAPI';
import { Loader } from '../Loader/Loader';
import { Box } from '../../pages/Home/Home.styled';
import {
  StyledList,
  StyledItem,
  StyledSubtitle,
  StyledTitle,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieReviews = async () => {
      setLoading(true);
      try {
        const { results } = await fetchMovieReviews(movieId);
        if (results.length === 0) {
          setIsEmpty(true);
        }
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    movieReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <Box> {Loader()} </Box>}
      <StyledList>
        {reviews.map(({ id, author, content }) => (
          <StyledItem key={id}>
            {author}
            <StyledSubtitle>{content}</StyledSubtitle>
          </StyledItem>
        ))}
      </StyledList>
      {error && <StyledTitle>Something went wrong. Try again.</StyledTitle>}
      {isEmpty && <StyledTitle> There are no reviews.</StyledTitle>}
    </div>
  );
};

export default Reviews;
