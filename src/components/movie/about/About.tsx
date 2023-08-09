import styles from './about.module.css';
import { useAppSelector } from '../../../store/hooks';
import { useResize } from '../../../hooks/useResize';
import { Description } from './description/Description';

export const About = () => {
  const [resize768] = useResize(768);
  const {
    genres,
    overview,
    release_date,
    runtime,
    budget,
    homepage,
    vote_average,
  } = useAppSelector((state) => state.movie.movie)!;

  return (
    <div className={styles.about}>
      <Description title='Overview' value={overview} />
      <Description title='Ganre' value={genres} />
      <Description title='Date of release' value={release_date} />
      <Description title='Runtime' value={`${runtime} minutes`} />
      {!resize768 && (
        <>
          <Description title='Budget' value={`$${budget}`} />
          <Description title='Rating' value={`${vote_average.toFixed(1)}`} />
          <Description title='Official site' value={homepage} link={true} />
        </>
      )}
    </div>
  );
};
