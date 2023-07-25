import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './movies.module.css';
import { getMoviesAsync } from '../../store/reducers/moviesSlice';
import { API_URL } from '../../api/instanceApi';
import { MoviesList } from '../../components/movies/moviesList/MoviesList';
import { Hero } from '../../components/movies/hero/Hero';
import { Pagination } from '../../components/pagination/Pagination';

export const Movies = () => {
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const dispatch = useAppDispatch();
  const pages = Object.keys(useAppSelector(state => state.movies.movies))

console.log(pages);

  useEffect(() => {
    if (!pages.includes(`${page}`)) {
      dispatch(getMoviesAsync({ page }));
    }
  }, [dispatch, page, pages]);

  return (
    <div className={styles.movies}>
      <Hero page={page} setPage={setPage}/>
      <MoviesList page={page} setTotal={setTotal}/>
      <Pagination page={page} total={total} setPage={setPage}/>
    </div>
  );
};
