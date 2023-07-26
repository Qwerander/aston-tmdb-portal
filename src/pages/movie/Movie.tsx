import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './movie.module.css';
import { useEffect } from 'react';
import { clearMovie, getMovieByIdAsync } from '../../store/reducers/movieSlice';
import { Loader } from '../../components/loader/loader';
import { Hero } from '../../components/movie/hero/Hero';
import { Production } from '../../components/movie/production/Production';
import { About } from '../../components/movie/about/About';

export const Movie = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  const movie = useAppSelector((state) => state.movie.movie);

  console.log(movie);

  useEffect(() => {
    if (!movie && id) {
      dispatch(getMovieByIdAsync({ id: +id }));
    }
  }, [id, dispatch, movie]);

  useEffect(() => {
    return () => {
      dispatch(clearMovie())
    }
  },[dispatch])

  if (!movie) return <Loader />;

  return (
    <div className={styles.movie}>
      <span className={styles.back} onClick={() => {navigate(-1)}}>Back to movies</span>
      <Hero />
      <div className={styles.descr}>
        <About />
        <Production />
      </div>
    </div>
  );
};
