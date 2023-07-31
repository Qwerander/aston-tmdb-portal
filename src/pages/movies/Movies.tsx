import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './movies.module.css';
import { setFilter } from '../../store/reducers/movies/moviesSlice';
import { MoviesList } from '../../components/movies/moviesList/MoviesList';
import { Hero } from '../../components/movies/hero/Hero';
import { Pagination } from '../../components/pagination/Pagination';
import { FilterType } from '../../store/reducers/movies/typesMovies';
import { Filters } from '../../components/movies/filters/Filters';
import { useMoviesFetch } from '../../hooks/useMoviesFetch';

export const Movies = () => {
  const [valueSearch, setValueSearch] = useState('');
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState(0);
  const selectedFilter = useAppSelector(state => state.movies.selectedFilter)
  const page = useAppSelector((state) => state.movies.currentPage);

  useMoviesFetch({ selectedFilter, valueSearch, page });

  const handleFilterChange = (filter: FilterType) => {
    dispatch(setFilter(filter))
  };

  return (
    <div className={styles.movies}>
      <Filters
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      <Hero
        page={page}
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
      />
      <MoviesList
        page={page}
        setTotal={setTotal}
        valueSearch={valueSearch}
        selectedFilter={selectedFilter}
      />
      <Pagination page={page} total={total} />
    </div>
  );
};





  // const dispatch = useAppDispatch();
  // const [valueSearch, setValueSearch] = useState('');
  // const [total, setTotal] = useState(0);
  // const [selectedFilter, setSelectedFilter] = useState(FilterType.NowPlaying);
  // const page = useAppSelector((state) => state.movies.currentPage);
  // const pagesPlaing = Object.keys(
  //   useAppSelector((state) => state.movies.nowPlaying.movies)
  // );
  // const pagesPopular = Object.keys(
  //   useAppSelector((state) => state.movies.popular.movies)
  // );
  // const pagesTopRated = Object.keys(
  //   useAppSelector((state) => state.movies.topRated.movies)
  // );
  // const pagesUpcoming = Object.keys(
  //   useAppSelector((state) => state.movies.upcoming.movies)
  // );
  // const pagesSearch = Object.keys(
  //   useAppSelector((state) => state.movies.moviesSearch.movies)
  // );
  // const prevValueSearch = useRef(valueSearch);
  // const prevPage = useRef(page);

  // const handleFilterChange = (filter: FilterType) => {
  //   setSelectedFilter(filter);
  // };

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     if (valueSearch && valueSearch !== prevValueSearch.current) {
  //       dispatch(clearMoviesSearch());
  //       dispatch(getMoviesSearchAsync({ search: valueSearch, page: 1 }));

  //       prevValueSearch.current = valueSearch;
  //     } else if (
  //       valueSearch &&
  //       page !== prevPage.current &&
  //       !pagesSearch.includes(`${page}`)
  //     ) {
  //       dispatch(getMoviesSearchAsync({ search: valueSearch, page }));
  //       prevPage.current = page;
  //     }
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [dispatch, page, valueSearch, prevValueSearch, pagesSearch]);

  // useEffect(() => {
  //   if (!valueSearch && valueSearch !== prevValueSearch.current) {
  //     dispatch(clearMoviesSearch());
  //   }
  // }, [valueSearch, dispatch]);

  // useEffect(() => {
  //   if (!valueSearch && !pagesPlaing.includes(`${page}`) && selectedFilter === FilterType.NowPlaying) {
  //     dispatch(getMoviesNowPlaying({ page }));
  //   }
  //   if (!valueSearch && !pagesPopular.includes(`${page}`) && selectedFilter === FilterType.Popular) {
  //     dispatch(getMoviesPopular({ page }));
  //   }
  //   if (!valueSearch && !pagesTopRated.includes(`${page}`) && selectedFilter === FilterType.TopRated) {
  //     dispatch(getMoviesTopRated({ page }));
  //   }
  //   if (!valueSearch && !pagesUpcoming.includes(`${page}`) && selectedFilter === FilterType.Upcoming) {
  //     dispatch(getMoviesUpcoming({ page }));
  //   }
  // }, [dispatch, page, pagesPlaing, valueSearch, selectedFilter, pagesPopular, pagesTopRated, pagesUpcoming]);