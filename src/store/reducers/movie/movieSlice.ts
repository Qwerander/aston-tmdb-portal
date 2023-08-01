import { createSlice } from '@reduxjs/toolkit';
import { IMovieState } from './typesMovie';
import { getMovieByIdAsync } from './fetchMethods';

const initialState: IMovieState = {
  movie: null,
  similar: null,
  images: null,
  status: 'idle'
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    clearMovie: (state) => {
      state.movie = null
      state.similar = null
      state.images = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieByIdAsync.fulfilled, (state, action) => {
      const { movie, similar, images } = action.payload
      state.movie = movie
      state.similar = similar
      state.images = images

      state.status = 'idle'
    })
    builder.addCase(getMovieByIdAsync.pending, (state) => {
      state.status = 'loading'
    })
    // builder.addCase(getSimilarMovies.fulfilled, (state, action) => {
    //   state.similar = action.payload.movies
    // })
  },
});


export const { clearMovie } = movieSlice.actions;

export default movieSlice.reducer;
