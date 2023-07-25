import { ChangeEvent, useEffect, useState } from 'react';
import styles from './pagination.module.css';
import { generateNumbersArray } from './generateNumbersArray';
import { setClassName } from './setClassName';
import { ReactComponent as ArrowLeft } from '../../img/icon_arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../img/icon_arrow-right.svg';

interface IPagination {
  total: number;
  page: number;
  setPage: (value: number) => void;
}

export const Pagination = ({ total, page, setPage }: IPagination) => {
  const arrPages = generateNumbersArray(total);
  const [activePage, setActivePage] = useState(page);
  const [inputValue, setInputValue] = useState(page.toString());

  const handleChangePage = (p: number) => {
    setPage(p);
    setActivePage(p);
    setInputValue(p.toString())
  };

  const handleSetPage = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputValue) {
        const pageNumber = parseInt(inputValue);
        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= total) {
          setPage(pageNumber);
          setActivePage(pageNumber);
        }
      }
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue, setPage, total]);

  return (
    <div className={styles.pagination}>
      <div className={styles.pages}>
        <ArrowLeft onClick={() => handleChangePage(activePage - 1)} />
        {activePage > 4 && <span className={styles.elipses} onClick={() => handleChangePage(activePage - 4)}>...</span>}
        <ul className={styles.list}>
          {arrPages.map((p) => {
            return (
              <li
                className={setClassName({
                  page: p,
                  activePage,
                  totalPage: total,
                })}
                key={p}
                onClick={() => handleChangePage(p)}>
                <span className={styles.number}>{p}</span>
              </li>
            );
          })}
        </ul>
        {activePage < total - 4 && <span className={styles.elipses} onClick={() => handleChangePage(activePage + 4)}>...</span>}
        <ArrowRight onClick={() => handleChangePage(activePage + 1)} />
      </div>
      <div className={styles.totalBlock}>
        <input
          className={styles.input}
          type='number'
          min={1}
          max={total}
          value={inputValue}
          onChange={handleSetPage}
        />
        <span className={styles.total}>Всего страниц: {total}</span>
      </div>
    </div>
  );
};
