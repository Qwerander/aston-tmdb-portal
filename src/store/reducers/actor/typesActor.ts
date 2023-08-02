import { IMovie } from "../movies/typesMovies";

export interface IActor {
  biography: string;
  birthday: string;
  id: number;
  name: string;
  place_of_birth: string;
  profile_path: string;
}

export interface IActorState {
  actor: IActor | null;
  movies: Array<IMovie> | null;
  status: 'idle' | 'loading' | 'failed';
}

export type QueryType = {
  id: number;
};
