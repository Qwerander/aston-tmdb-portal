import { createSlice } from '@reduxjs/toolkit';
import { IMovieState } from './typesMovie';
import { getMovieByIdAsync } from './fetchMethods';

const initialState: IMovieState = {
  movie: null,
  similar: null,
  images: null,
  actors: null,
  status: 'idle',
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    clearMovie: (state) => {
      state.movie = null;
      state.similar = null;
      state.images = null;
      state.actors = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieByIdAsync.fulfilled, (state, action) => {
      const { movie, similar, images, actors } = action.payload;
      state.movie = movie;
      state.similar = similar;
      state.images = images;
      state.actors = actors;
      state.status = 'idle';
    });
    builder.addCase(getMovieByIdAsync.pending, (state) => {
      state.status = 'loading';
    });
  },
});

export const { clearMovie } = movieSlice.actions;

export default movieSlice.reducer;
