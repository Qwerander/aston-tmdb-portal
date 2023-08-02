import styles from './movies.module.css';
import { MoviesList } from '../../components/movies/moviesList/MoviesList';
import { Hero } from '../../components/hero/Hero';
import { Pagination } from '../../components/pagination/Pagination';
import { Filters } from '../../components/movies/filters/Filters';
import { useMoviesFetch } from '../../hooks/useMoviesFetch';
import { useAppSelector } from '../../store/hooks';

export const Movies = () => {
  const currentPage = useAppSelector((state) => state.movies.currentPage);
  const { page, selectedFilter, setTotal, setValueSearch, total, valueSearch } =
    useMoviesFetch();

  return (
    <div className={styles.movies}>
      <Filters selectedFilter={selectedFilter} />
      <Hero
        serchPlaceholder='Найти фильм ...'
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
      />
      <MoviesList
        page={page}
        setTotal={setTotal}
        valueSearch={valueSearch}
        selectedFilter={selectedFilter}
      />
      <Pagination currentPage={currentPage} total={total} />
    </div>
  );
};
