import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMoviesState } from './typesMovies';
import { getMoviesNowPlaying, getMoviesSearchAsync } from './fetchMethods';

const initialState: IMoviesState = {
  nowPlaying: {
    movies: {},
    total_pages: 0
  },
  topRated: {
    movies: {},
    total_pages: 0
  },
  popular: {
    movies: {},
    total_pages: 0
  },
  upcoming: {
    movies: {},
    total_pages: 0
  },
  moviesSearch: {
    movies: {},
    total_pages: 0,
  },
  currentPage: 1,
  status: 'idle',
};


export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearMoviesSearch: (state) => {
      state.moviesSearch.movies = {}
      state.moviesSearch.total_pages = 0
      state.currentPage = 1
    },
    setCurrentPage: (state, action: PayloadAction<{ page: number }>) => {
      state.currentPage = action.payload.page
    }
  },

  extraReducers: (builder) => {
    builder.addCase(getMoviesNowPlaying.fulfilled, (state, action) => {
      console.log(action.payload);
      const { movies, page, total_pages } = action.payload
      state.nowPlaying.movies[page] = movies
      state.nowPlaying.total_pages = total_pages
      state.status = 'idle'
    })
    builder.addCase(getMoviesNowPlaying.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getMoviesSearchAsync.fulfilled, (state, action) => {
      const { movies, page, total_pages } = action.payload
      state.moviesSearch.movies[page] = movies
      state.moviesSearch.total_pages = total_pages
      state.status = 'idle'
    })
    builder.addCase(getMoviesSearchAsync.pending, (state) => {
      state.status = 'loading'
    })
  },
});


export const { clearMoviesSearch, setCurrentPage } = moviesSlice.actions;

export default moviesSlice.reducer;
