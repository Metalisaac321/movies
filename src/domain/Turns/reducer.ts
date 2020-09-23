import { Turn, TurnsState } from "./types";
import { AddNewTurnAction, ADD_NEW_TURN, ChangeTurnAction, CHANGE_TURN, DeleteTurnAction, DELETE_TURN, EditTurnAction, EDIT_TURN, SetStateTurnAction, SET_TURN_STATE, TurnsAction, TurnsFetchInitAction, TURNS_FETCH_INIT } from './actionTypes';
import { TurnedIn } from "@material-ui/icons";
import { moviesReducer } from "../Movies/reducer";

export const turnInitialData: TurnsState = {
  turns: [],
  turn: {
    turnId: 0,
    state: false,
    turn: '12:00',
    movie: {
      movieId: 0,
      name: '',
      publicationDate: new Date(),
      state: false,
    }
  }
};

export const turnsReducer = (state: TurnsState = turnInitialData, action: TurnsAction) => {
  switch (action.type) {
    case TURNS_FETCH_INIT:
      return applyTurnsFetchInit(state, action);

    case DELETE_TURN:
      return applyDeleteTurn(state, action);

    case EDIT_TURN:
      return applyEditTurn(state, action);

    case ADD_NEW_TURN:
      return applyAddNewTurn(state, action);

    case CHANGE_TURN:
      return applyChangeTurn(state, action);

    case SET_TURN_STATE:
      return applySetTurnState(state, action);

    default:
      return state;
  }
};

const applySetTurnState = (state: TurnsState, action: SetStateTurnAction) => {
  return {
    ...state,
    turn: { ...action.turn }
  };
}

const applyTurnsFetchInit = (state: TurnsState, action: TurnsFetchInitAction) => {
  return {
    ...state,
    turns: action.turns
  };
}

const applyAddNewTurn = (state: TurnsState, action: AddNewTurnAction) => {
  const turns = [...state.turns];
  const newTurn: Turn = {
    ...action.turn, turnId: turns[turns.length - 1].turnId + 1, movie: {
      movieId: 1,
      name: 'X men: Días del futuro pasado',
      publicationDate: new Date(),
      state: true,
    }
  };

  turns.push(newTurn);
  return {
    ...state,
    turns,
  }
}

const applyDeleteTurn = (state: TurnsState, { turnId }: DeleteTurnAction) => {
  let turns = [...state.turns];
  turns = turns.filter((turn) => turn.turnId !== turnId);

  return {
    ...state,
    turns,
  }
}

const applyChangeTurn = (state: TurnsState, action: ChangeTurnAction) => {
  const newTurns = [...state.turns];
  const turnIndex = newTurns.findIndex((turn) => turn.turnId === action.turnId)
  newTurns[turnIndex] = { ...state.turn }

  return {
    ...state,
    turns: newTurns
  }
}

const applyEditTurn = (state: TurnsState, action: EditTurnAction) => {
  return {
    ...state,
    turn: {
      ...state.turn,
      [action.key]: action.value,
    }
  }
}
