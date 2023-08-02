import { IMovie } from "./movies/typesMovies";

export const movieTransform = (movie: IMovie) => ({
    id: movie.id,
    poster_path: movie.poster_path,
    title: movie.title,
    vote_average: movie.vote_average,
  });
  