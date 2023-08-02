import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to={'/movies'}
          className={
            pathname === '/movies'
              ? `${styles.link} ${styles.active}`
              : `${styles.link}`
          }>
          Movies
        </NavLink>
        <NavLink
          to={'/actors'}
          className={
            pathname === '/actors'
              ? `${styles.link} ${styles.active}`
              : `${styles.link}`
          }>
          Actors
        </NavLink>
      </nav>
    </div>
  );
};
