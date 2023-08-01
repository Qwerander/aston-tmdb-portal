import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
    getMoviesNowPlaying,
    getMoviesPopular,
    getMoviesSearchAsync,
    getMoviesTopRated,
    getMoviesUpcoming,
} from '../store/reducers/movies/fetchMethods';
import { FilterType } from '../store/reducers/movies/typesMovies';
import { clearMoviesSearch } from '../store/reducers/movies/moviesSlice';

// interface IUseMoviesFetch {
//     selectedFilter: FilterType;
//     valueSearch: string;
//     page: number;
// }

export function useMoviesFetch() {
    const dispatch = useAppDispatch();
    const [valueSearch, setValueSearch] = useState('');
    const [total, setTotal] = useState(0);
    const selectedFilter = useAppSelector(state => state.movies.selectedFilter)
    const page = useAppSelector((state) => state.movies.currentPage);
    const pagesPlaying = Object.keys(useAppSelector((state) => state.movies.nowPlaying.movies));
    const pagesPopular = Object.keys(useAppSelector((state) => state.movies.popular.movies));
    const pagesTopRated = Object.keys(useAppSelector((state) => state.movies.topRated.movies));
    const pagesUpcoming = Object.keys(useAppSelector((state) => state.movies.upcoming.movies));
    const pagesSearch = Object.keys(useAppSelector((state) => state.movies.moviesSearch.movies));
    const prevValueSearch = useRef(valueSearch);
    const prevPage = useRef(page);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (valueSearch && valueSearch !== prevValueSearch.current) {
                dispatch(clearMoviesSearch());
                dispatch(getMoviesSearchAsync({ search: valueSearch, page: 1 }));
                prevValueSearch.current = valueSearch;
            } else if (valueSearch && page !== prevPage.current && !pagesSearch.includes(page.toString())) {
                dispatch(getMoviesSearchAsync({ search: valueSearch, page }));
                prevPage.current = page;
            }
        }, 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [dispatch, page, valueSearch, prevValueSearch, pagesSearch]);

    useEffect(() => {
        if (!valueSearch && valueSearch !== prevValueSearch.current) {
            dispatch(clearMoviesSearch());
        }
    }, [valueSearch, dispatch]);

    useEffect(() => {
        if (!valueSearch) {
            switch (selectedFilter) {
                case FilterType.NowPlaying:
                    if (!pagesPlaying.includes(page.toString())) {
                        dispatch(getMoviesNowPlaying({ page }));
                    }
                    break;
                case FilterType.Popular:
                    if (!pagesPopular.includes(page.toString())) {
                        dispatch(getMoviesPopular({ page }));
                    }
                    break;
                case FilterType.TopRated:
                    if (!pagesTopRated.includes(page.toString())) {
                        dispatch(getMoviesTopRated({ page }));
                    }
                    break;
                case FilterType.Upcoming:
                    if (!pagesUpcoming.includes(page.toString())) {
                        dispatch(getMoviesUpcoming({ page }));
                    }
                    break;
                default:
                    break;
            }
        }
    }, [dispatch, page, pagesPlaying, pagesPopular, pagesTopRated, pagesUpcoming, valueSearch, selectedFilter]);

    return {
        valueSearch, 
        setValueSearch,
        total, 
        setTotal,
        selectedFilter,
        page
    }
}