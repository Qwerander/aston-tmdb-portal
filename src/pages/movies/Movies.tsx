import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './movies.module.css';
import { getMoviesAsync } from '../../store/reducers/moviesSlice';
import { API_URL } from '../../api/instanceApi';

export const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch]);
  //  https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg
  // https://www.themoviedb.org/t/p/w220_and_h330_face
  return (
    <div className={styles.movies}>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <div
             className={styles.poster}
              style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${movie.poster_path})`,
              }}>
              <img className={styles.mini}
                src={
                  'https://www.themoviedb.org/t/p/w220_and_h330_face' +
                  movie.poster_path
                }
                alt=''
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
