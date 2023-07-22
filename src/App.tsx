import { apiRequest } from './api/instanceApi';
import { Header } from './components/header/Header';
import { Layout } from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Movies } from './pages/movies/Movies';
import { Actors } from './pages/actors/Actors';

function App() {
  const movie = apiRequest.get('/movie/now_playing');

  movie.then((res) => console.log(res));

  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path='movies' element={<Movies />}>
            <Route path='movie/:id' element={<div>a</div>} />
          </Route>
          <Route path='actors' element={<Actors />}>
            <Route path='actor/:id' element={<div>b</div>} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
