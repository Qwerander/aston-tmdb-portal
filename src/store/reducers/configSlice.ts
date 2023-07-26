import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { apiRequest } from '../../api/instanceApi';

export interface IImages {
  base_url: string
  secure_base_url: string
  backdrop_sizes: Array<string>
  logo_sizes: Array<string>
  poster_sizes: Array<string>
  profile_sizes: Array<string>
  still_sizes: Array<string>
  change_keys: Array<string>
}

export interface IImagesState {
  images: IImages
}

const initialState: IImagesState = {
  images: {
    base_url: '',
    secure_base_url: '',
    backdrop_sizes: [],
    logo_sizes: [],
    poster_sizes: [],
    profile_sizes: [],
    still_sizes: [],
    change_keys: [],
  }
};


export const getConfig = createAsyncThunk(
  'movies/fetchMovies',
  async () => {
    const res = await apiRequest.get(`/configuration`);
    const config = res.data.images
    return { config }
  }
);



export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getConfig.fulfilled, (state, action) => {
      state.images = action.payload.config
    })
  },
});


export const {  } = configSlice.actions;



// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default configSlice.reducer;
