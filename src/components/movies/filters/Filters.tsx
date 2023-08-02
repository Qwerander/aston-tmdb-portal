import { ChangeEvent, Fragment } from 'react';
import { FilterType } from '../../../store/reducers/movies/typesMovies';
import styles from './filters.module.css';
import { useAppDispatch } from '../../../store/hooks';
import { setFilter } from '../../../store/reducers/movies/moviesSlice';

interface IFilters {
  selectedFilter: FilterType;
}

const filterLabels: { [key in FilterType]: string } = {
  [FilterType.NowPlaying]: 'Now playing',
  [FilterType.TopRated]: 'Top rated',
  [FilterType.Popular]: 'Popular',
  [FilterType.Upcoming]: 'Upcoming',
};

export const Filters = ({ selectedFilter }: IFilters) => {
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value as FilterType;
    dispatch(setFilter({ filter }));
  };

  return (
    <div className={styles.filters}>
      {Object.values(FilterType).map((filter) => (
        <Fragment key={filter}>
          <input
            id={filter}
            type='radio'
            value={filter}
            checked={filter === selectedFilter}
            onChange={handleFilterChange}
          />
          <label htmlFor={filter} className={styles.label}>
            {filterLabels[filter]}
          </label>
        </Fragment>
      ))}
    </div>
  );
};
