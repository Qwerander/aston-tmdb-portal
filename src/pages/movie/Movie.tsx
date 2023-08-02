import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './movie.module.css';
import { useEffect, useRef } from 'react';
import { clearMovie } from '../../store/reducers/movie/movieSlice';
import { getMovieByIdAsync } from '../../store/reducers/movie/fetchMethods';
import { Loader } from '../../components/loader/loader';
import { Hero } from '../../components/movie/hero/Hero';
import { Production } from '../../components/movie/production/Production';
import { About } from '../../components/movie/about/About';
import { Images } from '../../components/movie/images/Images';
import { Similar } from '../../components/movie/similar/Similar';
import { Actors } from '../../components/movie/actors/Actors';

export const Movie = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { movie, similar, images, actors } = useAppSelector(
    (state) => state.movie
  );
  const refId = useRef(id);

  useEffect(() => {
    if (id && id !== refId.current) {
      dispatch(clearMovie());
      dispatch(getMovieByIdAsync({ id: +id }));
      refId.current = id;
    }
  }, [id, dispatch, movie, refId]);

  useEffect(() => {
    id && dispatch(getMovieByIdAsync({ id: +id }));

    return () => {
      dispatch(clearMovie());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (!movie) return <Loader />;

  return (
    <div className={styles.movie}>
      <span
        className={styles.back}
        onClick={() => {
          navigate(-1);
        }}>
        {'<-'} Back
      </span>
      <Hero />
      <div className={styles.descr}>
        <About />
        <Production />
      </div>
      {actors && <Actors />}
      {images && <Images />}
      {similar && <Similar />}
    </div>
  );
};
