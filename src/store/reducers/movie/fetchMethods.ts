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
    const images = resImages.data.backdrops.map(({file_path}: {file_path: string}) => file_path)
    return { movie, similar, images }
  }
);
