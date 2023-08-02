import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './actor.module.css';
import { useEffect } from 'react';
import { Loader } from '../../components/loader/loader';
import { Movie } from '../../components/movies/movie/Movie';
import { getActorById } from '../../store/reducers/actor/fetchMethods';
import { clearActor } from '../../store/reducers/actor/actorSlice';
import { Profile } from '../../components/actor/profile/Profile';
import { About } from '../../components/actor/about/About';

export const Actor = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { actor, movies } = useAppSelector((state) => state.actor);

  useEffect(() => {
    id && dispatch(getActorById({ id: +id }));

    return () => {
      dispatch(clearActor());
    };
  }, [dispatch, id]);

  if (!actor) return <Loader />;

  return (
    <div className={styles.actor}>
      <span
        className={styles.back}
        onClick={() => {
          navigate(-1);
        }}>
        {'<-'} Back
      </span>
      <div className={styles.descr}>
        <Profile />
        <About />
      </div>
      {movies && (
        <>
          <h2 className={styles.title}>Movies:</h2>
          <ul className={styles.list}>
            {movies?.map((movie) => (
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
      )}
    </div>
  );
};
