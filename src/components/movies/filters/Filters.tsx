import { ChangeEvent, Fragment } from 'react';
import { FilterType } from '../../../store/reducers/movies/typesMovies';
import styles from './filters.module.css';
import { useAppDispatch } from '../../../store/hooks';
import { setCurrentPage } from '../../../store/reducers/movies/moviesSlice';

interface IFilters {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filterLabels: { [key in FilterType]: string } = {
  [FilterType.NowPlaying]: 'Now playing',
  [FilterType.TopRated]: 'Top rated',
  [FilterType.Popular]: 'Popular',
  [FilterType.Upcoming]: 'Upcoming',
};

export const Filters = ({ selectedFilter, onFilterChange }: IFilters) => {
  const dispatch = useAppDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFilter = e.target.value as FilterType;
    onFilterChange(selectedFilter);
    dispatch(setCurrentPage({ page: 1 }));
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
