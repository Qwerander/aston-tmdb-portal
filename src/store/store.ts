import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movies from './reducers/movies/moviesSlice';
import movie from './reducers/movie/movieSlice';

export const store = configureStore({
  reducer: {
    movies,
    movie,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
