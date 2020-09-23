import { AddTurnDto, Turn } from "./types";

export const TURNS_FETCH_INIT = 'TURNS_FETCH_INIT';
export const ADD_NEW_TURN = 'ADD_NEW_TURN';
export const EDIT_TURN = 'EDIT_TURN';
export const ASSIGN_TURN_TURN = 'ASSIGN_TURN_TURN';
export const DELETE_TURN = 'DELETE_TURN';
export const SET_DIALOG_STATE = 'SET_DIALOG_STATE';
export const CHANGE_TURN = 'CHANGE_TURN';

export interface ChangeTurnAction {
  type: typeof CHANGE_TURN;
  turnId: number;
}

export interface TurnsFetchInitAction {
  type: typeof TURNS_FETCH_INIT;
  turns: Turn[];
}

export interface AddNewTurnAction {
  type: typeof ADD_NEW_TURN;
  turn: AddTurnDto;
}

export interface EditTurnAction {
  type: typeof EDIT_TURN;
  key: string;
  value: any;
}

export interface AssignTurnTurnAction {
  type: typeof ASSIGN_TURN_TURN;
  turnId: number;
}

export interface DeleteTurnAction {
  type: typeof DELETE_TURN;
  turnId: number;
}

export type TurnsAction =
  | TurnsFetchInitAction
  | AddNewTurnAction
  | EditTurnAction
  | AssignTurnTurnAction
  | DeleteTurnAction
  | ChangeTurnAction