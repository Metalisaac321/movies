import { MOVIES_FETCH_INIT, MoviesAction, DELETE_MOVIE, DeleteMovieAction, SET_DIALOG_STATE, EDIT_MOVIE, ADD_NEW_MOVIE, CHANGE_MOVIE } from './actionTypes';
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
      return {
        ...state,
        movies: action.movies
      };

    case DELETE_MOVIE:
      return applyDeleteMovie(state, action);

    case SET_DIALOG_STATE:
      return {
        ...state,
        dialogProps: { ...action.dialogProps }
      }

    case EDIT_MOVIE:
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

    case ADD_NEW_MOVIE:
      const movies = [...state.movies];
      const newMovie: Movie = { ...action.movie, movieId: movies[movies.length - 1].movieId + 1 };

      movies.push(newMovie);
      return {
        ...state,
        movies,
      }
    case CHANGE_MOVIE:
      const newMovies = [...state.movies];
      const movieIndex = newMovies.findIndex((movie) => movie.movieId === action.movieId)
      newMovies[movieIndex] = { ...state.dialogProps.movie }

      return {
        ...state,
        movies: newMovies
      }
    default:
      return state;
  }
};

const applyDeleteMovie = (state: MoviesState, { movieId }: DeleteMovieAction) => {
  let movies = [...state.movies];
  movies = movies.filter((movie) => movie.movieId !== movieId);

  return {
    ...state,
    movies,
  }
}
