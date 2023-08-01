import { useAppSelector } from '../../../store/hooks';
import styles from './images.module.css';

export const Images = () => {
  const images = useAppSelector((state) => state.movie.images)!;
  return (
    <div className={styles.images}>
      {images
        ?.slice(1, 4)
        .map((img) => (
          <img
            className={styles.img}
            key={img}
            src={`https://www.themoviedb.org/t/p/w780${img}`}
            alt=''
          />
        ))}
    </div>
  );
};
