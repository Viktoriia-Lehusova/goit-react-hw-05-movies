import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>{Loader()}</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
