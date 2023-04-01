import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'fetchAPI';
import MovieList from 'components/MovieList';

const Movies = () => {
  const [movieValue, setMovieValue] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (searchParams.get('searchQuery') === null) return;
    const searchValue = searchParams.get('searchQuery');
    async function MovieByValue() {
      try {
        const { results } = await fetchMovieByQuery(searchValue);
        setMoviesByQuery(results);
      } catch (error) {
        console.log(error.message);
      }
    }
    MovieByValue();
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams({ searchQuery: movieValue });
    //    if (imageValue.trim() === '') {
    //      toast.error('Something went wrong.');
    //      return;
    //    }

    setMovieValue('');
  };

  const handleSearchValueChange = evt => {
    setMovieValue(evt.target.value);
    // setMovieValue(evt.currentTarget.value.toLowerCase());
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
      <MovieList movies={moviesByQuery} />
    </div>
  );
};

export default Movies;
