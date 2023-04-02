import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from '../../fetchAPI';
import MovieList from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';
import { CgSearch } from 'react-icons/cg';
import Notiflix from 'notiflix';
import {
  StyledTitle,
  StyledInput,
  StyledForm,
  StyledBtn,
} from './Movies.styled';
import { Box } from '../Home/Home.styled';

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
      Notiflix.Notify.failure('Something went wrong.');
      setSearchParams({});
      return;
    }

    setSearchParams({ searchQuery: movieValue });

    if (movieValue.trim() === '') {
      Notiflix.Notify.failure('Something went wrong.');
      return;
    }

    setMovieValue('');
  };

  const handleSearchValueChange = evt => {
    setMovieValue(evt.target.value);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="searchQuery"
          value={movieValue}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSearchValueChange}
        />
        <StyledBtn type="submit">
          <CgSearch />
        </StyledBtn>
      </StyledForm>

      {moviesByQuery && <MovieList movies={moviesByQuery} />}
      {loading && <Box> {Loader()} </Box>}

      {error && <StyledTitle>Something went wrong. Try again.</StyledTitle>}
      {isEmpty && (
        <StyledTitle> Sorry. There are no movies by your query</StyledTitle>
      )}
    </div>
  );
};

export default Movies;
