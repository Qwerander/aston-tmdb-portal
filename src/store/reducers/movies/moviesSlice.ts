import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType, IMoviesState } from './typesMovies';
import { getMoviesNowPlaying, getMoviesPopular, getMoviesSearchAsync, getMoviesTopRated, getMoviesUpcoming } from './fetchMethods';

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
  selectedFilter: FilterType.NowPlaying,
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
    },
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.selectedFilter = action.payload;
      state.currentPage = 1
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesNowPlaying.fulfilled, (state, action) => {
      const { movies, page, total_pages } = action.payload
      state.nowPlaying.movies[page] = movies
      state.nowPlaying.total_pages = total_pages
      state.status = 'idle'
    })
    builder.addCase(getMoviesNowPlaying.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getMoviesPopular.fulfilled, (state, action) => {
      const { movies, page, total_pages } = action.payload
      state.popular.movies[page] = movies
      state.popular.total_pages = total_pages
      state.status = 'idle'
    })
    builder.addCase(getMoviesPopular.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getMoviesTopRated.fulfilled, (state, action) => {
      const { movies, page, total_pages } = action.payload
      state.topRated.movies[page] = movies
      state.topRated.total_pages = total_pages
      state.status = 'idle'
    })
    builder.addCase(getMoviesTopRated.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getMoviesUpcoming.fulfilled, (state, action) => {
      const { movies, page, total_pages } = action.payload
      state.upcoming.movies[page] = movies
      state.upcoming.total_pages = total_pages
      state.status = 'idle'
    })
    builder.addCase(getMoviesUpcoming.pending, (state) => {
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


export const { clearMoviesSearch, setCurrentPage, setFilter } = moviesSlice.actions;

export default moviesSlice.reducer;
