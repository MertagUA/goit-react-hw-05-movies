import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { Header, Main, Nav, NavigationLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </>
  );
};
