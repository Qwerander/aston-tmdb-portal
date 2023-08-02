import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActorsState } from './typesActors';
import { getActors, getActorsSearch } from './fetchMethods';

const initialState: IActorsState = {
  popular: {
    actors: {},
    total_pages: 0,
  },
  search: {
    actors: {},
    total_pages: 0,
  },
  currentPage: 1,
  status: 'idle',
};

export const actorsSlice = createSlice({
  name: 'actors',
  initialState,
  reducers: {
    clearActorsSearch: (state) => {
      state.search.actors = {};
      state.search.total_pages = 0;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<{ page: number }>) => {
      state.currentPage = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getActors.fulfilled, (state, action) => {
      const { actors, page, total_pages } = action.payload;
      state.popular.actors[page] = actors;
      state.popular.total_pages = total_pages;
      state.status = 'idle';
    });
    builder.addCase(getActors.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getActorsSearch.fulfilled, (state, action) => {
      const { actors, page, total_pages } = action.payload;
      state.search.actors[page] = actors;
      state.search.total_pages = total_pages;
      state.status = 'idle';
    });
    builder.addCase(getActorsSearch.pending, (state) => {
      state.status = 'loading';
    });
  },
});

export const { clearActorsSearch, setCurrentPage } = actorsSlice.actions;

export default actorsSlice.reducer;
