export interface IActor {
  biography: string;
  birthday: string;
  id: number;
  name: string;
  place_of_birth: string;
  profile_path: string;
}

export interface IMovieActor {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

export interface IActorState {
  actor: IActor | null;
  movies: IMovieActor[] | null;
  status: 'idle' | 'loading' | 'failed';
}

export type QueryType = {
  id: number;
};
