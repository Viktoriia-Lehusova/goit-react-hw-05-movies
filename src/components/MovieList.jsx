import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link id={`${id}`} to={`/movies/${id}`}>
            {title ?? name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
