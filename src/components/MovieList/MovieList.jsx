import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link id={`${id}`} state={{ from: location }} to={`/movies/${id}`}>
            {title ?? name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
