import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to={'/movies'} className={styles.link}>
          Movies
        </NavLink>
        <NavLink to={'/actors'} className={styles.link}>
          Actors
        </NavLink>
      </nav>
    </div>
  )
}

