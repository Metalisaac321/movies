import { AddMovieDto, Movie, DialogProps } from "./types";

export const MOVIES_FETCH_INIT = 'MOVIES_FETCH_INIT';
export const ADD_NEW_MOVIE = 'ADD_NEW_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const ASSIGN_TURN_MOVIE = 'ASSIGN_TURN_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SET_DIALOG_STATE = 'SET_DIALOG_STATE';
export const CHANGE_MOVIE = 'CHANGE_MOVIE';

export interface ChangeMovieAction {
  type: typeof CHANGE_MOVIE;
  movieId: number;
}

export interface SetDialogStateAction {
  type: typeof SET_DIALOG_STATE;
  dialogProps: DialogProps
}

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
  key: string;
  value: any;
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
  | SetDialogStateAction
  | ChangeMovieAction