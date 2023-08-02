import { Movie } from '../movie/Movie';
import styles from './moviesList.module.css';
import { Loader } from '../../loader/loader';
import { IMovieList, useMovieList } from '../../../hooks/useMoviesList';

export const MoviesList = (props: IMovieList) => {
  const { moviesRender, status } = useMovieList(props);

  if (status === 'loading') return <Loader />;

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
