import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movies from './reducers/moviesSlice';

export const store = configureStore({
  reducer: {
    movies,
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
