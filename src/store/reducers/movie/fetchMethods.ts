import { createAsyncThunk } from "@reduxjs/toolkit";
import { QueryType } from "./typesMovie";
import { apiRequest } from "../../../api/instanceApi";


export const getMovieByIdAsync = createAsyncThunk(
  'movie/fetchMovie',
  async (data: QueryType) => {
    const res = await apiRequest.get(`/movie/${data.id}`);
    const movie = res.data

    return { movie }
  }
);