import { useAppSelector } from '../../../store/hooks';
import styles from './about.module.css';

export const About = () => {
  const { name, birthday, place_of_birth, biography } = useAppSelector(
    (state) => state.actor.actor
  )!;

  return (
    <div className={styles.about}>
      <div className={styles.wrapper}>
        <div className={styles.subtitle}>Name: </div>
        <p className={styles.text}>{name}</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subtitle}>Birthday: </div>
        <p className={styles.text}>{birthday}</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subtitle}>Place of birth: </div>
        <p className={styles.text}>{place_of_birth}</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subtitle}>Biograthy: </div>
        <p className={styles.text}>{biography}</p>
      </div>
    </div>
  );
};
