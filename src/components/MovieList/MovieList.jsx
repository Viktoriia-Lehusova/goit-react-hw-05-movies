import { useLocation } from 'react-router-dom';
import {
  StyledList,
  StyledItem,
  StyledImg,
  StyledSubtitle,
  StyledLink,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const img_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <StyledList>
      {movies.map(({ id, title, name, poster_path }) => (
        <StyledItem key={id}>
          <StyledLink
            id={`${id}`}
            state={{ from: location }}
            to={`/movies/${id}`}
          >
            <StyledImg src={img_url + poster_path} alt="" />
            <StyledSubtitle> {title ?? name}</StyledSubtitle>
          </StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default MovieList;
