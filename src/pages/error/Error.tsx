import styles from './error.module.css';
import { NavLink, useNavigate } from 'react-router-dom';

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.error}>
      <p className={styles.text}>
        Похоже, мы не можем найти нужную Вам страницу.
      </p>
      <div className={styles.wrapper}>
        <span
          className={styles.link}
          onClick={() => {
            navigate(-1);
          }}>
          Back 
        </span>
        <NavLink className={styles.link} to='/movies'>
          Movies
        </NavLink>
        <NavLink className={styles.link} to='/actors'>
          Actors
        </NavLink>
      </div>
    </div>
  );
};
