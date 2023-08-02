import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './actor.module.css';
import { useEffect } from 'react';
import { Loader } from '../../components/loader/loader';
import { Movie } from '../../components/movies/movie/Movie';
import { getActorById } from '../../store/reducers/actor/fetchMethods';
import { clearActor } from '../../store/reducers/actor/actorSlice';
import no_poster from '../../img/no-poster.jpg';

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
  console.log(actor);

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
        <div className={styles.profile}>
          {actor.profile_path ? (
            <img
              className={styles.cover}
              src={
                actor.profile_path
                  ? 'https://www.themoviedb.org/t/p/w780' + actor.profile_path
                  : no_poster
              }
              alt={actor.name}
            />
          ) : (
            <div className={styles.noCover}></div>
          )}
        </div>
        <div className={styles.about}>
          <div className={styles.wrapper}>
            <div className={styles.subtitle}>Name: </div>
            <p className={styles.text}>{actor.name}</p>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.subtitle}>Birthday: </div>
            <p className={styles.text}>{actor.birthday}</p>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.subtitle}>Place of birth: </div>
            <p className={styles.text}>{actor.place_of_birth}</p>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.subtitle}>Biograthy: </div>
            <p className={styles.text}>{actor.biography}</p>
          </div>
        </div>
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
