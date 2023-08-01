import { IMovie as ISimilar } from '../movies/typesMovies'

interface IGenre {
  id: number
  name: string
}

interface IProduction {
  id: number
  logo_path: string
  name: string
  origin_country: string
}
interface IProductionCountry {
  iso_3166_1: string
  name: string
}

interface ISpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface IMovie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: string
  budget: number
  genres: Array<IGenre>
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Array<IProduction>
  production_countries: Array<IProductionCountry>
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: Array<ISpokenLanguage>
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IActorsMovie {
  id: number
  name: string
  profile_path: string
}

export interface IMovieState {
  movie: IMovie | null
  similar: ISimilar[] | null
  images: string[] | null
  actors: IActorsMovie[] | null
  status: 'idle' | 'loading' | 'failed';
}


export type QueryType = {
  id: number
}