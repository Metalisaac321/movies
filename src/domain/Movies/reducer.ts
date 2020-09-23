import {
  MOVIES_FETCH_INIT, MoviesAction, DELETE_MOVIE, DeleteMovieAction, SET_DIALOG_STATE,
  EDIT_MOVIE, ADD_NEW_MOVIE, CHANGE_MOVIE, AddNewMovieAction, ChangeMovieAction, EditMovieAction,
  SetDialogStateAction, MoviesFetchInitAction
} from './actionTypes';
import { Movie, MoviesState } from './types';

export const homeInitialData: MoviesState = {
  movies: [],
  dialogProps: {
    isOpen: false,
    isEditMovie: false,
    movie: {
      movieId: 0,
      name: '',
      publicationDate: new Date(),
      state: true,
    }
  }
};

export const moviesReducer = (state: MoviesState = homeInitialData, action: MoviesAction) => {
  switch (action.type) {
    case MOVIES_FETCH_INIT:
      return applyMoviesFetchInit(state, action);

    case DELETE_MOVIE:
      return applyDeleteMovie(state, action);

    case SET_DIALOG_STATE:
      return applySetDialogState(state, action);

    case EDIT_MOVIE:
      return applyEditMovie(state, action);

    case ADD_NEW_MOVIE:
      return applyAddNewMovie(state, action);

    case CHANGE_MOVIE:
      return applyChangeMovie(state, action);
    default:
      return state;
  }
};

const applyMoviesFetchInit = (state: MoviesState, action: MoviesFetchInitAction) => {
  return {
    ...state,
    movies: action.movies
  };
}

const applyAddNewMovie = (state: MoviesState, action: AddNewMovieAction) => {
  const movies = [...state.movies];
  const newMovie: Movie = { ...action.movie, movieId: movies[movies.length - 1].movieId + 1 };

  movies.push(newMovie);
  return {
    ...state,
    movies,
  }
}

const applyDeleteMovie = (state: MoviesState, { movieId }: DeleteMovieAction) => {
  let movies = [...state.movies];
  movies = movies.filter((movie) => movie.movieId !== movieId);

  return {
    ...state,
    movies,
  }
}

const applyChangeMovie = (state: MoviesState, action: ChangeMovieAction) => {
  const newMovies = [...state.movies];
  const movieIndex = newMovies.findIndex((movie) => movie.movieId === action.movieId)
  newMovies[movieIndex] = { ...state.dialogProps.movie }

  return {
    ...state,
    movies: newMovies
  }
}

const applyEditMovie = (state: MoviesState, action: EditMovieAction) => {
  return {
    ...state,
    dialogProps: {
      ...state.dialogProps,
      movie: {
        ...state.dialogProps.movie,
        [action.key]: action.value
      }
    }
  }
}

const applySetDialogState = (state: MoviesState, action: SetDialogStateAction) => {
  return {
    ...state,
    dialogProps: { ...action.dialogProps }
  }
}