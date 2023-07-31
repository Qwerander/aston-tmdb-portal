import { useEffect, useState } from 'react';
import styles from './pagination.module.css';
import { generateNumbersArray } from './generateNumbersArray';
import { setClassName } from './setClassName';
import { ReactComponent as ArrowLeft } from '../../img/icon_arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../img/icon_arrow-right.svg';
import { setCurrentPage } from '../../store/reducers/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

interface IPagination {
  total: number;
  page: number;
  // setPage: (value: number) => void;
}

export const Pagination = ({ total, page }: IPagination) => {
  const dispatch = useAppDispatch();
  const arrPages = generateNumbersArray(total);
  const currentPage = useAppSelector((state) => state.movies.currentPage);
  const [inputValue, setInputValue] = useState<string>(`${currentPage}`);

  const handleChangePage = (p: number ) => {
      dispatch(setCurrentPage({ page: p }));
      setInputValue(`${p}`)
  };

  useEffect(() => {
    setInputValue(`${currentPage}`);
  }, [currentPage]);

  useEffect(() => {
    if (+inputValue !== currentPage) {
      const timeoutId = setTimeout(() => {
        if (+inputValue >= 1 && +inputValue <= total) {
            dispatch(setCurrentPage({ page: +inputValue }));
        }
      }, 2000);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [inputValue, dispatch, total, currentPage]);

  return (
    <div className={styles.pagination}>
      <div className={styles.pages}>
        <ArrowLeft onClick={() => handleChangePage(currentPage - 1)} />
        {currentPage > 4 && (
          <span
            className={styles.elipses}
            onClick={() => handleChangePage(currentPage - 4)}>
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
                  totalPage: total,
                })}
                key={p}
                onClick={() => handleChangePage(p)}>
                <span className={styles.number}>{p}</span>
              </li>
            );
          })}
        </ul>
        {currentPage < total - 4 && (
          <span
            className={styles.elipses}
            onClick={() => handleChangePage(currentPage + 4)}>
            ...
          </span>
        )}
        <ArrowRight onClick={() => handleChangePage(currentPage + 1)} />
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
