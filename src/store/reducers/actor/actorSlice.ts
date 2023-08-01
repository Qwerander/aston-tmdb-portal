import { createSlice } from '@reduxjs/toolkit';
import { IActorState } from './typesActor';
import { getActorById } from './fetchMethods';

const initialState: IActorState = {
  actor: null,
  movies: null,
  status: 'idle'
};

export const actorSlice = createSlice({
  name: 'actor',
  initialState,
  reducers: {
    clearActor: (state) => {
      state.actor = null
      state.movies = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getActorById.fulfilled, (state, action) => {
      const { actor, movies } = action.payload
      state.actor = actor
      state.movies = movies
      state.status = 'idle'
    })
    builder.addCase(getActorById.pending, (state) => {
      state.status = 'loading'
    })
  },
});


export const { clearActor } = actorSlice.actions;

export default actorSlice.reducer;
