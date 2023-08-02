import { createAsyncThunk } from '@reduxjs/toolkit';
import { AcctorsType, IActorsMovie, IMovie, ImagesType, QueryType } from './typesMovie';
import { apiRequest } from '../../../api/instanceApi';
import { movieTransform } from '../helpers';
import { MoviesType } from '../movies/typesMovies';

export const getMovieByIdAsync = createAsyncThunk(
  'movie/fetchMovie',
  async (data: QueryType) => {
    const resMovie = await apiRequest.get(`/movie/${data.id}`);
    const resSimilar = await apiRequest.get(`/movie/${data.id}/similar`);
    const resImages = await apiRequest.get(`/movie/${data.id}/images`);
    const resActors = await apiRequest.get(`/movie/${data.id}/credits`);
    const movie: IMovie = {
      backdrop_path: resMovie.data.backdrop_path,
      budget: resMovie.data.budget,
      genres: resMovie.data.genres,
      homepage: resMovie.data.homepage,
      id: resMovie.data.id,
      overview: resMovie.data.overview,
      production_companies: resMovie.data.production_companies,
      production_countries: resMovie.data.production_countries,
      release_date: resMovie.data.release_date,
      runtime: resMovie.data.runtime,
      title: resMovie.data.title,
      vote_average: resMovie.data.vote_average,
    };
    const actors: AcctorsType = resActors.data.cast
      .map((actor: IActorsMovie) => ({
        id: actor.id,
        name: actor.name,
        profile_path: actor.profile_path,
        cast_id: actor.cast_id,
      }))
      .sort((a: IActorsMovie, b: IActorsMovie) => a.cast_id - b.cast_id)
      .slice(0, 10);
    const similar: MoviesType = resSimilar.data.results.map(movieTransform);
    const images: ImagesType = resImages.data.backdrops.map(
      ({ file_path }: { file_path: string }) => file_path
    );
    return { movie, similar, images, actors };
  }
);
