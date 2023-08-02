import styles from './actor.module.css';
import no_poster from '../../../img/no-poster.jpg';
import { useNavigate } from 'react-router-dom';
import { IActor } from '../../../store/reducers/actors/typesActors';

export const Actor = ({ id, gender, name, profile_path }: IActor) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/actor/${id}`);
  };

  return (
    <div className={styles.movie} onClick={handleClick}>
      {profile_path ? (
        <img
          className={styles.cover}
          src={
            profile_path
              ? 'https://www.themoviedb.org/t/p/w220_and_h330_face' +
                profile_path
              : no_poster
          }
          alt={name}
        />
      ) : (
        <div className={styles.noCover}></div>
      )}
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
      </div>
    </div>
  );
};
