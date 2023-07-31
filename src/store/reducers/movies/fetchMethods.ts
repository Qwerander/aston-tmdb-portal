import { createAsyncThunk } from "@reduxjs/toolkit";
import { FilterType, QueryType } from "./typesMovies";
import { apiRequest } from "../../../api/instanceApi";

export const getMoviesNowPlaying = createAsyncThunk(
    'movies/fetchMoviesNowPlaying',
    async (data: QueryType) => {
      const { page } = data
      const res = await apiRequest.get(`/movie/${FilterType.NowPlaying}?&page=${page}`);
      const movies = res.data.results
      const total_pages = res.data.total_pages
      return { page: data.page, movies, total_pages }
    }
  );
export const getMoviesPopular = createAsyncThunk(
    'movies/fetchMoviesPopular',
    async (data: QueryType) => {
      const { page } = data
      const res = await apiRequest.get(`/movie/${FilterType.Popular}?&page=${page}`);
      const movies = res.data.results
      const total_pages = res.data.total_pages
      return { page: data.page, movies, total_pages }
    }
  );
export const getMoviesTopRated = createAsyncThunk(
    'movies/fetchMoviesTopRated',
    async (data: QueryType) => {
      const { page } = data
      const res = await apiRequest.get(`/movie/${FilterType.TopRated}?&page=${page}`);
      const movies = res.data.results
      const total_pages = res.data.total_pages
      return { page: data.page, movies, total_pages }
    }
  );
export const getMoviesUpcoming = createAsyncThunk(
    'movies/fetchMoviesUpcoming',
    async (data: QueryType) => {
      const { page } = data
      const res = await apiRequest.get(`/movie/${FilterType.Upcoming}?&page=${page}`);
      const movies = res.data.results
      const total_pages = res.data.total_pages
      return { page: data.page, movies, total_pages }
    }
  );
  
  export const getMoviesSearchAsync = createAsyncThunk(
    'movies/fetchMoviesSearch',
    async (data: QueryType) => {
      const { page, search } = data
      const res = await apiRequest.get(`/search/movie?query=${search}&page=${page}`);
      const movies = res.data.results
      const total_pages = res.data.total_pages
      return { page: data.page, movies, total_pages }
    }
  );