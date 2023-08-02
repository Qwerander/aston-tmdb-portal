export interface IMovie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

export type MoviesType = Array<IMovie>

export enum FilterType {
  NowPlaying = 'now_playing',
  Popular = 'popular',
  TopRated = 'top_rated',
  Upcoming = 'upcoming',
}

export type QueryType = {
  page: number;
  search?: string;
};

export interface IMoviesState {
  nowPlaying: {
    movies: Record<number, IMovie[]>;
    total_pages: number;
  };
  popular: {
    movies: Record<number, IMovie[]>;
    total_pages: number;
  };
  topRated: {
    movies: Record<number, IMovie[]>;
    total_pages: number;
  };
  upcoming: {
    movies: Record<number, IMovie[]>;
    total_pages: number;
  };
  moviesSearch: {
    movies: Record<number, IMovie[]>;
    total_pages: number;
  };
  selectedFilter: FilterType;
  currentPage: number;
  status: 'idle' | 'loading' | 'failed';
}
