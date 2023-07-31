import { createSlice } from '@reduxjs/toolkit';
import { IMovieState } from './typesMovie';
import { getMovieByIdAsync } from './fetchMethods';

const initialState: IMovieState = {
  movie: null,
  status: 'idle'
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    clearMovie: (state) => {
      state.movie = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMovieByIdAsync.fulfilled, (state, action) => {
      state.movie = action.payload.movie
      state.status = 'idle'
    })
    builder.addCase(getMovieByIdAsync.pending, (state) => {
      state.status = 'loading'
    })
  },
});


export const { clearMovie } = movieSlice.actions;

export default movieSlice.reducer;
