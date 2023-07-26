import { ChangeEvent } from 'react';
import styles from './hero.module.css';

interface IHero {
  page: number;
  valueSearch: string;
  setValueSearch: (value: string) => void;
}

export const Hero = ({ page, valueSearch, setValueSearch }: IHero) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);
  };

  return (
    <div className={styles.hero}>
      <h2 className={styles.title}>Миллионы фильмов, сериалов и людей</h2>
      <label className={styles.label}>
        <input
          className={styles.input}
          type='text'
          value={valueSearch}
          onChange={handleChange}
          placeholder='Найти фильм ......'
        />
        {valueSearch && (
          <span className={styles.clear} onClick={() => setValueSearch('')}>
            x
          </span>
        )}
      </label>
    </div>
  );
};
