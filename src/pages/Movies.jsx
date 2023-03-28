import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'fetchAPI';
import { MovieList } from 'components/MovieList';

const Movies = () => {
  const [movieValue, setMovieValue] = useState('');
  const [movieByQuery, setMovieByQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('searchQuery') === null) return;
    const searchValue = searchParams.get('searchQuery');
    async function MovieByValue() {
      try {
        const { results } = await fetchMovieByQuery(searchValue);
        setMovieByQuery(results);
      } catch (error) {
        console.log(error.message);
      }
    }
    MovieByValue();
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();

    //    if (imageValue.trim() === '') {
    //      toast.error('Something went wrong.');
    //      return;
    //    }
    setSearchParams({ searchQuery: movieValue });

    setMovieValue('');
  };

  const handleSearchValueChange = evt => {
    setMovieValue(evt.currentTarget.value.toLowerCase());
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
      {/* <MovieList movies={movieByQuery} /> */}
    </div>
  );
};

export default Movies;
