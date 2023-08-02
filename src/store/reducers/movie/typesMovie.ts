import { MoviesType } from '../movies/typesMovies';

interface IGenre {
  id: number;
  name: string;
}

interface IProduction {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface IMovie {
  backdrop_path: string;
  budget: number;
  genres: Array<IGenre>;
  homepage: string;
  id: number;
  overview: string;
  production_companies: Array<IProduction>;
  production_countries: Array<IProductionCountry>;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
}

export interface IActorsMovie {
  id: number;
  name: string;
  profile_path: string;
  cast_id: number;
}

export type ImagesType = Array<string> 
export type AcctorsType = Array<IActorsMovie> 

export interface IMovieState {
  movie: IMovie | null;
  similar: MoviesType | null;
  images: ImagesType | null;
  actors: AcctorsType | null;
  status: 'idle' | 'loading' | 'failed';
}

export type QueryType = {
  id: number;
};
