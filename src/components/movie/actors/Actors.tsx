import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import styles from './actors.module.css';

export const Actors = () => {
  const actors = useAppSelector((state) => state.movie.actors)!;
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/actor/${id}`);
  };

  return (
    <>
      <h2 className={styles.headTitle}>Actors: </h2>
      <div className={styles.actors}>
        {actors?.map((actor) => (
          <div
            key={actor.id}
            className={styles.actor}
            onClick={() => handleClick(actor.id)}>
            {actor.profile_path ? (
              <img
                className={styles.cover}
                src={
                  actor.profile_path
                    ? 'https://www.themoviedb.org/t/p/w780' + actor.profile_path
                    : ''
                }
                alt={actor.name}
              />
            ) : (
              <div className={styles.noCover}></div>
            )}
            <div className={styles.info}>
              <h2 className={styles.title}>{actor.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
