import { apiRequest } from './api/instanceApi';
import { Header } from './components/header/Header';
import { Layout } from './components/layout/Layout';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Movies } from './pages/movies/Movies';
import { Actors } from './pages/actors/Actors';
import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { getConfig } from './store/reducers/configSlice';
import { Movie } from './pages/movie/Movie';

function App() {
  const dispatch = useAppDispatch();
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
          <Route path='movies' element={<Movies />} />
          <Route path='movie/:id' element={<Movie />} />

          <Route path='actors' element={<Actors />}>
            <Route path='actor/:id' element={<div>b</div>} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
