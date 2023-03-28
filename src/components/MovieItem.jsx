import { Link, Outlet } from 'react-router-dom';

const MovieItem = ({ movie, genres }) => {
  const img_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <div id={movie.id}>
      <div>
        <img src={img_url + movie.poster_path} alt={movie.name} />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link>Cast</Link>
        </li>
        <li>
          <Link>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieItem;
