export interface IMovie {
    adult?: boolean
    backdrop_path?: string
    genre_ids?: Array<number>
    id: number
    original_language?: string
    original_title?: string
    overview?: string
    popularity?: number
    poster_path: string
    release_date?: string
    title: string
    video?: boolean
    vote_average: number
    vote_count?: number
}

  export enum FilterType {
    NowPlaying = 'now_playing',
    Popular = 'popular',
    TopRated = 'top_rated',
    Upcoming = 'upcoming',
  }
  
  export type QueryType = {
    page: number
    search?: string
  }

  export interface IMoviesState {
    movies: {
      movies: Record<number, IMovie[]>
      total_pages: number
    }
    moviesSearch: {
      movies: Record<number, IMovie[]>;
      total_pages: number
    }
    currentPage: number
    status: 'idle' | 'loading' | 'failed';
  }
  