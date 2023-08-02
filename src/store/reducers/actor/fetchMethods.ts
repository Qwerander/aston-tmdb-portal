import { createAsyncThunk } from '@reduxjs/toolkit';
import { IActor, IMovieActor, QueryType } from './typesActor';
import { apiRequest } from '../../../api/instanceApi';

export const getActorById = createAsyncThunk(
  'movie/fetchActor',
  async (data: QueryType) => {
    const resActor = await apiRequest.get(`/person/${data.id}`);
    const resMovies = await apiRequest.get(`/person/${data.id}/movie_credits`);

    const actor: IActor = {
      biography: resActor.data.biography,
      birthday: resActor.data.birthday,
      id: resActor.data.id,
      name: resActor.data.name,
      place_of_birth: resActor.data.place_of_birth,
      profile_path: resActor.data.profile_path,
    };

    const movies: IMovieActor[] = resMovies.data.cast.map(
      (movie: IMovieActor) => ({
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        vote_average: movie.vote_average,
      })
    );

    return { actor, movies };
  }
);
