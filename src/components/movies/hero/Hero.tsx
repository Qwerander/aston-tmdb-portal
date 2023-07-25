import { useEffect, useState } from 'react';
import styles from './hero.module.css';
import { useAppDispatch } from '../../../store/hooks';
import { clearMoviesSearch, getMoviesSearchAsync } from '../../../store/reducers/moviesSlice';

interface IHero {
    page: number
    setPage: (value: number) => void
}

export const Hero = ({page, setPage}: IHero) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (value) {
        setPage(1)
        dispatch(getMoviesSearchAsync({search: value, page}))
    } else {
        dispatch(clearMoviesSearch())
        setPage(1)
      }
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, dispatch, page, setPage]);

  return (
    <div className={styles.hero}>
      <h2 className={styles.title}>Миллионы фильмов, сериалов и людей</h2>
      <input
        className={styles.input}
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='Найти фильм ......'
      />
    </div>
  );
};
