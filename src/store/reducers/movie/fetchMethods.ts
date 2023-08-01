import { createAsyncThunk } from "@reduxjs/toolkit";
import { QueryType } from "./typesMovie";
import { apiRequest } from "../../../api/instanceApi";


export const getMovieByIdAsync = createAsyncThunk(
  'movie/fetchMovie',
  async (data: QueryType) => {
    const resMovie = await apiRequest.get(`/movie/${data.id}`);
    const resSimilar = await apiRequest.get(`/movie/${data.id}/similar`);
    const resImages = await apiRequest.get(`/movie/${data.id}/images`);
    const movie = resMovie.data
    const similar = resSimilar.data.results
    const images: Array<string> = resImages.data.backdrops.map((img: any) => img.file_path)
    return { movie, similar, images }
  }
);

// export const getSimilarMovies = createAsyncThunk(
//   'movie/fetchSimilar',
//   async (data: QueryType) => {

//     return { movies }
//   }
// );