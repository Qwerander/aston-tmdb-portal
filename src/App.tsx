import { Header } from './components/header/Header';
import { Layout } from './components/layout/Layout';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Movies } from './pages/movies/Movies';
import { Actors } from './pages/actors/Actors';
import { useEffect } from 'react';
import { Movie } from './pages/movie/Movie';
import { Error } from './pages/error/Error';
import { Actor } from './pages/actor/Actor';
import { Loader } from './components/loader/loader';

export const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/movies');
    }
  }, [pathname, navigate]);

  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<Loader />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='actors' element={<Actors />} />
          <Route path='actor/:id' element={<Actor />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
}

