import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import {
  Container,
  StyledImg,
  StyledTitle,
  StyledText,
  StyledSubtitle,
  StyledItem,
  StyledLink,
} from './/MovieItem.styled';
import { Box } from '../../pages/Home/Home.styled';

const MovieItem = ({ movie, genres }) => {
  const img_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <div id={movie.id}>
      <Container>
        <div>
          <StyledImg src={img_url + movie.poster_path} alt={movie.name} />
        </div>
        <div>
          <div>
            <StyledTitle>{movie.title}</StyledTitle>
            <StyledText>
              User Score: {Math.round(movie.vote_average * 10)}%
            </StyledText>
            <StyledSubtitle>Overview</StyledSubtitle>
            <StyledText>{movie.overview}</StyledText>
            <StyledSubtitle>Genres</StyledSubtitle>
            <ul>
              {genres &&
                genres.map(({ id, name }) => (
                  <StyledItem key={id}>{name}</StyledItem>
                ))}
            </ul>
          </div>
          <div>
            <StyledSubtitle>Additional information</StyledSubtitle>
            <ul>
              <StyledItem>
                <StyledLink to="cast">Cast</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to="reviews">Reviews</StyledLink>
              </StyledItem>
            </ul>
          </div>
        </div>
      </Container>

      <Suspense fallback={<Box>{Loader()}</Box>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieItem;
