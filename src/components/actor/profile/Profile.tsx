import { useAppSelector } from '../../../store/hooks';
import styles from './profile.module.css';
import no_poster from '../../../img/no-poster.jpg';

export const Profile = () => {
  const { profile_path, name } = useAppSelector((state) => state.actor.actor)!;
  return (
    <div className={styles.profile}>
      {profile_path ? (
        <img
          className={styles.cover}
          src={
            profile_path
              ? 'https://www.themoviedb.org/t/p/w780' + profile_path
              : no_poster
          }
          alt={name}
        />
      ) : (
        <div className={styles.noCover}></div>
      )}
    </div>
  );
};
