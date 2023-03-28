import { fetchMovieCast } from 'fetchAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const img_url = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const movieCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img src={img_url + profile_path} alt="" />
            <h2>{name}</h2>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
