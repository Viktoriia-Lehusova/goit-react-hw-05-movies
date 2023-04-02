import { fetchMovieCast } from '../../fetchAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

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
      {loading && <div> {Loader()} </div>}
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img src={img_url + profile_path} alt="" />
            <h2>{name}</h2>
            <p>{character}</p>
          </li>
        ))}
      </ul>
      {error && <h2>Something went wrong. Try again.</h2>}
      {isEmpty && <h1> Sorry, we dont have this information.</h1>}
    </div>
  );
};

export default Cast;
