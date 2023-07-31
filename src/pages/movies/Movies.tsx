import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './movies.module.css';
import { clearMoviesSearch } from '../../store/reducers/movies/moviesSlice';
import {
  getMoviesNowPlaying,
  getMoviesSearchAsync,
} from '../../store/reducers/movies/fetchMethods';
import { MoviesList } from '../../components/movies/moviesList/MoviesList';
import { Hero } from '../../components/movies/hero/Hero';
import { Pagination } from '../../components/pagination/Pagination';

export const Movies = () => {
  const dispatch = useAppDispatch();
  const [valueSearch, setValueSearch] = useState('');
  const [total, setTotal] = useState(0);
  const page = useAppSelector((state) => state.movies.currentPage);
  const pagesPlaing = Object.keys(
    useAppSelector((state) => state.movies.movies.movies)
  );
  const pagesSearch = Object.keys(
    useAppSelector((state) => state.movies.moviesSearch.movies)
  );
  const prevValueSearch = useRef(valueSearch);
  const prevPage = useRef(page);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (valueSearch && valueSearch !== prevValueSearch.current) {
        dispatch(clearMoviesSearch());
        dispatch(getMoviesSearchAsync({ search: valueSearch, page: 1 }));

        prevValueSearch.current = valueSearch;
      } else if (
        valueSearch &&
        page !== prevPage.current &&
        !pagesSearch.includes(`${page}`)
      ) {
        dispatch(getMoviesSearchAsync({ search: valueSearch, page }));
        prevPage.current = page;
      }
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, page, valueSearch, prevValueSearch, pagesSearch]);

  useEffect(() => {
    if (!valueSearch && valueSearch !== prevValueSearch.current) {
      dispatch(clearMoviesSearch());
      console.log('a');
    }
  }, [valueSearch, dispatch]);

  useEffect(() => {
    if (!valueSearch && !pagesPlaing.includes(`${page}`)) {
      dispatch(getMoviesNowPlaying({ page }));
      console.log('asd');
    }
  }, [dispatch, page, pagesPlaing, valueSearch]);

  return (
    <div className={styles.movies}>
      <Hero
        page={page}
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
      />
      <MoviesList page={page} setTotal={setTotal} valueSearch={valueSearch} />
      <Pagination page={page} total={total} />
    </div>
  );
};
