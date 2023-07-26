import { IMovie } from '../../../store/reducers/moviesSlice';
import styles from './movie.module.css';
import no_poster from "../../../img/no-poster.jpg";
import { useNavigate } from 'react-router-dom';

export const Movie = ({ id, title, vote_average, poster_path }: IMovie) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/movie/${id}`)
  }
  return (
    <div className={styles.movie} onClick={handleClick}>
      {poster_path 
      ? <img
        className={styles.cover}
        src={poster_path ?
          'https://www.themoviedb.org/t/p/w220_and_h330_face' +
          poster_path : no_poster
        }
        alt={title}
      />
      : <div className={styles.noCover}></div>
      }
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.vote_average}>
            Rating: {vote_average}
        </span>
      </div>
    </div>
  );
};
