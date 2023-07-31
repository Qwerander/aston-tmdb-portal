import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { Movie } from '../movie/Movie';
import styles from './moviesList.module.css';
import { Loader } from '../../loader/loader';
import { FilterType, IMovie } from '../../../store/reducers/movies/typesMovies';

interface IMovieList {
  page: number;
  valueSearch: string;
  setTotal: (value: number) => void;
  selectedFilter: FilterType 
}

export const MoviesList = ({ page, setTotal, valueSearch, selectedFilter }: IMovieList) => {
  const {
    nowPlaying: { movies: nowPlaying, total_pages: totalNowPlaying },
    popular: { movies: popular, total_pages: totalPopular },
    topRated: { movies: topRated, total_pages: totalTopRated },
    upcoming: { movies: upcoming, total_pages: totalUpcoming },
    moviesSearch: { movies: moviesSearch, total_pages: totalMoviesSearch },
    status,
  } = useAppSelector((state) => state.movies);

  let selectedMovies: Record<number, IMovie[]> = [];

  switch (selectedFilter) {
    case FilterType.NowPlaying:
      selectedMovies = nowPlaying;
      break;
    case FilterType.Popular:
      selectedMovies = popular;
      break;
    case FilterType.TopRated:
      selectedMovies = topRated;
      break;
    case FilterType.Upcoming:
      selectedMovies = upcoming;
      break;
    default:
      break;
  }

  const moviesRender = valueSearch ? moviesSearch[page] : selectedMovies[page];

  useEffect(() => {
    if (totalMoviesSearch) {
      setTotal(totalMoviesSearch);
    } else {
      switch (selectedFilter) {
        case FilterType.NowPlaying:
          setTotal(totalNowPlaying);
          break;
          case FilterType.Popular:
          setTotal(totalPopular);
          break;
          case FilterType.TopRated:
          setTotal(totalTopRated);
          break;
          case FilterType.Upcoming:
          setTotal(totalUpcoming);
          break;
        default:
          break;
      }
    }
  }, [totalMoviesSearch, setTotal, selectedFilter, totalNowPlaying, totalPopular, totalTopRated, totalUpcoming]);

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
