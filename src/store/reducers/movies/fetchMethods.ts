import { createAsyncThunk } from "@reduxjs/toolkit";
import { FilterType, QueryType } from "./typesMovies";
import { apiRequest } from "../../../api/instanceApi";

export const getMoviesNowPlaying = createAsyncThunk(
    'movies/fetchMovies',
    async (data: QueryType) => {
      const { page } = data
      const res = await apiRequest.get(`/movie/${FilterType.NowPlaying}?&page=${page}`);
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