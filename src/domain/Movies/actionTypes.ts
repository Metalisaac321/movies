import { AddMovieDto, Movie } from "./types";

export const MOVIES_FETCH_INIT = 'MOVIES_FETCH_INIT';
export const ADD_NEW_MOVIE = 'ADD_NEW_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const ASSIGN_TURN_MOVIE = 'ASSIGN_TURN_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

interface MoviesFetchInitAction {
  type: typeof MOVIES_FETCH_INIT;
  movies: Movie[];
}

export interface AddNewMovieAction {
  type: typeof ADD_NEW_MOVIE;
  movie: AddMovieDto;
}

interface EditMovieAction {
  type: typeof EDIT_MOVIE;
  movie: Movie;
}

export interface AssignTurnMovieAction {
  type: typeof ASSIGN_TURN_MOVIE;
  movieId: number;
}

export interface DeleteMovieAction {
  type: typeof DELETE_MOVIE;
  movieId: number;
}

export type MoviesAction =
  | MoviesFetchInitAction
  | AddNewMovieAction
  | EditMovieAction
  | AssignTurnMovieAction
  | DeleteMovieAction