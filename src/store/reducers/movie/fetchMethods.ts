import { createAsyncThunk } from "@reduxjs/toolkit";
import { IActorsMovie, QueryType } from "./typesMovie";
import { apiRequest } from "../../../api/instanceApi";


export const getMovieByIdAsync = createAsyncThunk(
  'movie/fetchMovie',
  async (data: QueryType) => {
    const resMovie = await apiRequest.get(`/movie/${data.id}`);
    const resSimilar = await apiRequest.get(`/movie/${data.id}/similar`);
    const resImages = await apiRequest.get(`/movie/${data.id}/images`);
    const resActors = await apiRequest.get(`/movie/${data.id}/credits`);
    const movie = resMovie.data
    const actors: IActorsMovie[] = resActors.data.cast.map((actor: IActorsMovie) => (
      {
        id: actor.id,
        name: actor.name,
        profile_path: actor.profile_path,
        cast_id: actor.cast_id
      }
    )).sort((a: IActorsMovie, b: IActorsMovie) => a.cast_id - b.cast_id)
      .slice(0, 10)
    const similar = resSimilar.data.results
    const images = resImages.data.backdrops.map(({ file_path }: { file_path: string }) => file_path)
    return { movie, similar, images, actors }
  }
);
