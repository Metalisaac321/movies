import { DELETE_MOVIE, MoviesAction, MOVIES_FETCH_INIT } from "./actionTypes";
import { Movie } from "./types";

export const setInitMovies = (movies: Movie[]): MoviesAction => ({
  type: MOVIES_FETCH_INIT,
  movies,
})

export const deleteMovie = (movieId: number): MoviesAction => ({
  type: DELETE_MOVIE,
  movieId,
})