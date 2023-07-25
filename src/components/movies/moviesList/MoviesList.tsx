import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { Movie } from '../movie/Movie';
import styles from './moviesList.module.css';

interface IMovieList {
  page: number;
  setTotal: (value: number) => void
}

export const MoviesList = ({ page, setTotal }: IMovieList) => {
  const movies = useAppSelector((state) => state.movies.movies.movies[page]);
  const moviesSearch = useAppSelector(
    (state) => state.movies.moviesSearch.movies
  );
  const totalMoviesSearch = useAppSelector(
    (state) => state.movies.moviesSearch.total_pages
  );
  const totalMovies = useAppSelector(
    (state) => state.movies.movies.total_pages
  );
  const moviesRender = (moviesSearch ? moviesSearch[page] : null) || movies;

useEffect(() => {
    if (totalMoviesSearch) {
        setTotal(totalMoviesSearch)
    } else {
        setTotal(totalMovies)
    }
}, [totalMoviesSearch, totalMovies, setTotal])

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

// <div
// //   className={styles.poster}
// //   style={{
// //     backgroundImage: `url(https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${movie.poster_path})`,
// //   }}
//   >

// </div>
