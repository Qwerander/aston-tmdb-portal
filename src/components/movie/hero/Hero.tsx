import styles from './hero.module.css';
import { useAppSelector } from '../../../store/hooks';

export const Hero = () => {
  const { backdrop_path, title, budget, homepage, vote_average } =
    useAppSelector((state) => state.movie.movie)!;

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${backdrop_path})`,
        }}>
        <span className={styles.budget}>
          {budget ? `Budget: $${budget}` : null}
        </span>
        <div className={styles.descr}>
          <a className={styles.link} href={homepage}>
            Оfficial site
          </a>
          <span className={styles.rating}>
            Rating: {vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </>
  );
};
