import { ADD_NEW_MOVIE, CHANGE_MOVIE, DELETE_MOVIE, EDIT_MOVIE, MoviesAction, MOVIES_FETCH_INIT, SET_DIALOG_STATE } from "./actionTypes";
import { DialogProps, Movie, AddMovieDto } from "./types";

export const setInitMovies = (movies: Movie[]): MoviesAction => ({
  type: MOVIES_FETCH_INIT,
  movies,
})

export const deleteMovie = (movieId: number): MoviesAction => ({
  type: DELETE_MOVIE,
  movieId,
})

export const setDialogProps = (dialogProps: DialogProps): MoviesAction => ({
  type: SET_DIALOG_STATE,
  dialogProps,
})

export const editMovieField = (key: string, value: any): MoviesAction => ({
  type: EDIT_MOVIE,
  key,
  value,
})

export const addNewMovie = (newMovie: AddMovieDto): MoviesAction => ({
  type: ADD_NEW_MOVIE,
  movie: newMovie
})

export const changeMovieById = (movieId: number) => ({
  type: CHANGE_MOVIE,
  movieId,
})