import styles from './production.module.css';
import { useAppSelector } from '../../../store/hooks';

export const Production = () => {
  const { production_companies, production_countries } = useAppSelector(
    (state) => state.movie.movie
  )!;

  return (
    <div className={styles.production}>
      <div className={styles.block}>
        Production company:
        <div className={styles.company}>
          {production_companies.map((company) => {
            if (company.logo_path) {
              return (
                <div className={styles.wrapper} key={company.id}>
                  <img
                    className={styles.logo}
                    src={`https://www.themoviedb.org/t/p/w92${company.logo_path}`}
                    alt=''
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className={styles.block}>
        Production countries:
        <div className={styles.countries}>
          {production_countries.map((country) => (
            <div key={country.iso_3166_1}>
              <span className={styles.country}>{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
