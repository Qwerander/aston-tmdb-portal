import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getActors, getActorsSearch } from '../store/reducers/actors/fetchMethods';
import { clearActorsSearch } from '../store/reducers/actors/actorsSlice';


export function useActorsFetch() {
    const dispatch = useAppDispatch();
    const [valueSearch, setValueSearch] = useState('');
    const [total, setTotal] = useState(0);
    const page = useAppSelector((state) => state.actors.currentPage);
    const pagesPopular = Object.keys(useAppSelector((state) => state.actors.popular.actors));
    const pagesSearch = Object.keys(useAppSelector((state) => state.actors.search.actors));
    const prevValueSearch = useRef(valueSearch);
    const prevPage = useRef(page);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (valueSearch && valueSearch !== prevValueSearch.current) {
                dispatch(clearActorsSearch());
                dispatch(getActorsSearch({ search: valueSearch, page: 1 }));
                prevValueSearch.current = valueSearch;
            } else if (valueSearch && page !== prevPage.current && !pagesSearch.includes(page.toString())) {
                dispatch(getActorsSearch({ search: valueSearch, page }));
                prevPage.current = page;
            }
        }, 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [dispatch, page, valueSearch, prevValueSearch, pagesSearch]);

    useEffect(() => {
        if (!valueSearch && valueSearch !== prevValueSearch.current) {
            dispatch(clearActorsSearch());
        }
    }, [valueSearch, dispatch]);

    useEffect(() => {
        if (!valueSearch && !pagesPopular.includes(page.toString())) {
            dispatch(getActors({ page }));
        }
    }, [dispatch, page, valueSearch, pagesPopular]);

    return {
        valueSearch,
        setValueSearch,
        total,
        setTotal,
        page
    }
}