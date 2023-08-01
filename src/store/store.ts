import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movies from './reducers/movies/moviesSlice';
import movie from './reducers/movie/movieSlice';
import actors from './reducers/actors/actorsSlice';

export const store = configureStore({
  reducer: {
    movies,
    movie,
    actors,
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
