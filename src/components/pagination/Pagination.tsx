import { useEffect, useState } from 'react';
import styles from './pagination.module.css';
import { generateNumbersArray } from './generateNumbersArray';
import { setClassName } from './setClassName';
import { ReactComponent as ArrowLeft } from '../../img/icon_arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../img/icon_arrow-right.svg';
import { useAppDispatch } from '../../store/hooks';
import { setCurrentPage as setPageMovies } from '../../store/reducers/movies/moviesSlice';
import { setCurrentPage as setPageActors } from '../../store/reducers/actors/actorsSlice';
import { useLocation } from 'react-router-dom';

interface IPagination {
  total: number;
  currentPage: number;
}

export const Pagination = ({ total, currentPage }: IPagination) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const arrPages = generateNumbersArray(total);
  const [inputValue, setInputValue] = useState<string>(`${currentPage}`);

  const handleChangePage = (p: number) => () => {
    if (pathname === '/movies') {
      dispatch(setPageMovies({ page: p }));
    }
    if (pathname === '/actors') {
      dispatch(setPageActors({ page: p }));
    }
    setInputValue(`${p}`);
  };

  useEffect(() => {
    setInputValue(`${currentPage}`);
  }, [currentPage]);

  useEffect(() => {
    if (+inputValue !== currentPage) {
      const timeoutId = setTimeout(() => {
        if (+inputValue >= 1 && +inputValue <= total) {
          if (pathname === '/movies') {
            dispatch(setPageMovies({ page: +inputValue }));
          }
          if (pathname === '/actors') {
            dispatch(setPageActors({ page: +inputValue }));
          }
        }
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [inputValue, dispatch, total, currentPage, pathname]);

  return (
    <div className={styles.pagination}>
      <div className={styles.pages}>
        <ArrowLeft onClick={handleChangePage(currentPage - 1)} />
        {currentPage > 4 && (
          <span
            className={styles.elipses}
            onClick={handleChangePage(currentPage - 4)}>
            ...
          </span>
        )}
        <ul className={styles.list}>
          {arrPages.map((p) => {
            return (
              <li
                className={setClassName({
                  page: p,
                  currentPage,
                })}
                key={p}
                onClick={handleChangePage(p)}>
                <span className={styles.number}>{p}</span>
              </li>
            );
          })}
        </ul>
        {currentPage < total - 4 && (
          <span
            className={styles.elipses}
            onClick={handleChangePage(currentPage + 4)}>
            ...
          </span>
        )}
        <ArrowRight onClick={handleChangePage(currentPage + 1)} />
      </div>
      <div className={styles.totalBlock}>
        <input
          className={styles.input}
          type='number'
          min={1}
          max={total}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span className={styles.total}>Всего страниц: {total}</span>
      </div>
    </div>
  );
};
