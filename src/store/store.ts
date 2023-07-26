import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movies from './reducers/moviesSlice';
import movie from './reducers/movieSlice';
import config from './reducers/configSlice';

export const store = configureStore({
  reducer: {
    // config,
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
