import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilterType, MoviesType, QueryType } from './typesMovies';
import { apiRequest } from '../../../api/instanceApi';
import { movieTransform } from '../helpers';

export const getMoviesNowPlaying = createAsyncThunk(
  'movies/fetchMoviesNowPlaying',
  async (data: QueryType) => {
    const { page } = data;
    const res = await apiRequest.get(
      `/movie/${FilterType.NowPlaying}?&page=${page}`
    );
    const movies: MoviesType = res.data.results.map(movieTransform);
    const total_pages: number = res.data.total_pages;
    return { page, movies, total_pages };
  }
);
export const getMoviesPopular = createAsyncThunk(
  'movies/fetchMoviesPopular',
  async (data: QueryType) => {
    const { page } = data;
    const res = await apiRequest.get(
      `/movie/${FilterType.Popular}?&page=${page}`
    );
    const movies: MoviesType = res.data.results.map(movieTransform);
    const total_pages: number = res.data.total_pages;
    if (total_pages > 234) {//  234 from develop (иначе долгая загрузка?!)
      return { page, movies: movies, total_pages: 234}; 
    }
    return { page, movies: movies,  total_pages};
  }
);
export const getMoviesTopRated = createAsyncThunk(
  'movies/fetchMoviesTopRated',
  async (data: QueryType) => {
    const { page } = data;
    const res = await apiRequest.get(
      `/movie/${FilterType.TopRated}?&page=${page}`
    );
    const movies: MoviesType = res.data.results.map(movieTransform);
    const total_pages: number = res.data.total_pages;
    return { page, movies, total_pages };
  }
);
export const getMoviesUpcoming = createAsyncThunk(
  'movies/fetchMoviesUpcoming',
  async (data: QueryType) => {
    const { page } = data;
    const res = await apiRequest.get(
      `/movie/${FilterType.Upcoming}?&page=${page}`
    );
    const movies: MoviesType = res.data.results.map(movieTransform);
    const total_pages: number = res.data.total_pages;
    return { page, movies, total_pages };
  }
);

export const getMoviesSearchAsync = createAsyncThunk(
  'movies/fetchMoviesSearch',
  async (data: QueryType) => {
    const { page, search } = data;
    const res = await apiRequest.get(
      `/search/movie?query=${search}&page=${page}`
    );
    const movies: MoviesType = res.data.results.map(movieTransform);
    const total_pages: number = res.data.total_pages;
    return { page, movies, total_pages };
  }
);
