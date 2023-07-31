import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { Movie } from '../movie/Movie';
import styles from './moviesList.module.css';
import { Loader } from '../../loader/loader';

interface IMovieList {
  page: number;
  valueSearch: string;
  setTotal: (value: number) => void;
}

export const MoviesList = ({ page, setTotal, valueSearch }: IMovieList) => {
  const {
    nowPlaying: { movies, total_pages: totalMovies },
    moviesSearch: { movies: moviesSearch, total_pages: totalMoviesSearch },
    status,
  } = useAppSelector((state) => state.movies);

  const moviesRender = valueSearch ? moviesSearch[page] : movies[page];

  useEffect(() => {
    if (totalMoviesSearch) {
      setTotal(totalMoviesSearch);
    } else {
      setTotal(totalMovies);
    }
  }, [totalMoviesSearch, totalMovies, setTotal]);

  if (status === 'loading') return <Loader />

  return (
    <ul className={styles.list}>
      {moviesRender?.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          vote_average={movie.vote_average}
          poster_path={movie.poster_path}
        />
      ))}
    </ul>
  );
};
