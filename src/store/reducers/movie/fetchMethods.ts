import { createAsyncThunk } from "@reduxjs/toolkit";
import { QueryType } from "./typesMovie";
import { apiRequest } from "../../../api/instanceApi";


export const getMovieByIdAsync = createAsyncThunk(
  'movie/fetchMovie',
  async (data: QueryType) => {
    const resMovie = await apiRequest.get(`/movie/${data.id}`);
    const resSimilar = await apiRequest.get(`/movie/${data.id}/similar`);
    const movie = resMovie.data
    const similar = resSimilar.data.results

    return { movie, similar }
  }
);

// export const getSimilarMovies = createAsyncThunk(
//   'movie/fetchSimilar',
//   async (data: QueryType) => {

//     return { movies }
//   }
// );