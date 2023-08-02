import { useAppSelector } from '../../../store/hooks';
import { Movie } from '../../movies/movie/Movie';
import styles from './similar.module.css';

export const Similar = () => {
  const similar = useAppSelector((state) => state.movie.similar)!;
  return (
    <>
      <h2 className={styles.title}>Similar movies:</h2>
      <ul className={styles.list}>
        {similar?.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
          />
        ))}
      </ul>
    </>
  );
};
