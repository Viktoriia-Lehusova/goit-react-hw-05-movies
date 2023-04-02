import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../fetchAPI';
import { Loader } from '../Loader/Loader';

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
      {loading && <div> {Loader()} </div>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            {author}
            <p>{content}</p>
          </li>
        ))}
      </ul>
      {error && <h2>Something went wrong. Try again.</h2>}
      {isEmpty && <h1> There are no reviews.</h1>}
    </div>
  );
};

export default Reviews;
