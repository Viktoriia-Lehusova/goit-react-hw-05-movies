import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from '../fetchAPI';
import MovieList from '../components/MovieList';
import { Loader } from '../components/Loader';
import Notiflix from 'notiflix';

const Movies = () => {
  const [movieValue, setMovieValue] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchParams.get('searchQuery') === null) return;
    const searchValue = searchParams.get('searchQuery');
    setLoading(true);
    async function MovieByValue() {
      try {
        const { results } = await fetchMovieByQuery(searchValue);
        if (results.length === 0) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
        setMoviesByQuery(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    MovieByValue();
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (movieValue === '') {
      return setSearchParams({});
    }

    setSearchParams({ searchQuery: movieValue });

    if (movieValue.trim() === '') {
      Notiflix.Notify.failure('Something went wrong.');
      return;
    }

    setMovieValue('');
    setMoviesByQuery([]);
  };

  const handleSearchValueChange = evt => {
    setMovieValue(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          value={movieValue}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSearchValueChange}
        />
        <button type="submit"></button>
      </form>

      {moviesByQuery && <MovieList movies={moviesByQuery} />}
      {loading && <div> {Loader()} </div>}

      {error && <h2>Something went wrong. Try again.</h2>}
      {isEmpty && <h1> Sorry. There are no movies by your query</h1>}
    </div>
  );
};

export default Movies;
