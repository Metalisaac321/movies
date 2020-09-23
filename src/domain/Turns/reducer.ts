import { Turn, TurnsState } from "./types";
import { AddNewTurnAction, ADD_NEW_TURN, ChangeTurnAction, CHANGE_TURN, DeleteTurnAction, DELETE_TURN, EditTurnAction, EDIT_TURN, TurnsAction, TurnsFetchInitAction, TURNS_FETCH_INIT } from './actionTypes';

export const turnInitialData: TurnsState = {
  turns: [],
};

export const turnsReducer = (state: TurnsState = turnInitialData, action: TurnsAction) => {
  switch (action.type) {
    case TURNS_FETCH_INIT:
      return applyTurnsFetchInit(state, action);

    /* case DELETE_TURN:
      return applyDeleteTurn(state, action);

    case EDIT_TURN:
      return applyEditTurn(state, action);

    case ADD_NEW_TURN:
      return applyAddNewTurn(state, action);

    case CHANGE_TURN:
      return applyChangeTurn(state, action); */
    default:
      return state;
  }
};

const applyTurnsFetchInit = (state: TurnsState, action: TurnsFetchInitAction) => {
  return {
    ...state,
    turns: action.turns
  };
}
/*
const applyAddNewTurn = (state: TurnsState, action: AddNewTurnAction) => {
  const movies = [...state.movies];
  const newTurn: Turn = { ...action.movie, movieId: movies[movies.length - 1].movieId + 1 };

  movies.push(newTurn);
  return {
    ...state,
    movies,
  }
}

const applyDeleteTurn = (state: TurnsState, { movieId }: DeleteTurnAction) => {
  let movies = [...state.movies];
  movies = movies.filter((movie) => movie.movieId !== movieId);

  return {
    ...state,
    movies,
  }
}

const applyChangeTurn = (state: TurnsState, action: ChangeTurnAction) => {
  const newTurns = [...state.movies];
  const movieIndex = newTurns.findIndex((movie) => movie.movieId === action.movieId)
  newTurns[movieIndex] = { ...state.dialogProps.movie }

  return {
    ...state,
    movies: newTurns
  }
}

const applyEditTurn = (state: TurnsState, action: EditTurnAction) => {
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
} */
