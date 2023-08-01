import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movies from './reducers/movies/moviesSlice';
import movie from './reducers/movie/movieSlice';
import actors from './reducers/actors/actorsSlice';
import actor from './reducers/actor/actorSlice';

export const store = configureStore({
  reducer: {
    movies,
    movie,
    actors,
    actor,
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
