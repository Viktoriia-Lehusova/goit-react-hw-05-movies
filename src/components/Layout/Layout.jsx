import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { StyledHeader, StyledLink, StyledMain } from './Layout.styled';
import { Box } from '../../pages/Home/Home.styled';

const Layout = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </StyledHeader>
      <StyledMain>
        <Suspense fallback={<Box>{Loader()}</Box>}>
          <Outlet />
        </Suspense>
      </StyledMain>
      <footer></footer>
    </div>
  );
};

export default Layout;
