import styles from './about.module.css';
import { useAppSelector } from '../../../store/hooks';
import { Fragment } from 'react';
import { useResize } from '../../../hooks/useResize';

export const About = () => {
  const [resize768] = useResize(768);
  const { genres, overview, release_date, runtime, budget, homepage, vote_average } = useAppSelector(
    (state) => state.movie.movie
  )!;

  return (
    <div className={styles.about}>
      <div className={styles.descr}>
        <div className={styles.title}>Overview: </div>
        <p className={styles.text}>{overview}</p>
      </div>
      <div className={styles.descr}>
        <div className={styles.title}>Ganre: </div>
        <p className={styles.text}>
          {genres.map((genre, i , arr) => (
            <Fragment key={genre.id}>
              {genre.name.toLocaleLowerCase()}{i !== (arr.length - 1) ? ', ' : '.'}
            </Fragment>
          ))}
          
        </p>
      </div>
      <div className={styles.descr}>
        <div className={styles.title}>Date of release:</div>
        <p className={styles.text}>{release_date}</p>
      </div>
      <div className={styles.descr}>
        <div className={styles.title}>Runtime: </div>
        <p className={styles.text}>{runtime} minutes</p>
      </div>
      {!resize768 && (
        <>
          <div className={styles.descr}>
            <div className={styles.title}>Budget: </div>
            <p className={styles.text}>${budget}</p>
          </div>
          <div className={styles.descr}>
            <div className={styles.title}>Rating: </div>
            <p className={styles.text}>{vote_average.toFixed(1)}</p>
          </div>
          <div className={styles.descr}>
            <div className={styles.title}>Official site: </div>
            <p className={styles.text}><a href={homepage}>{homepage}</a></p>
          </div>
        </>
      )}
    </div>
  );
};
