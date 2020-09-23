import { ADD_NEW_TURN, CHANGE_TURN, DELETE_TURN, EDIT_TURN, TurnsAction, TURNS_FETCH_INIT } from "./actionTypes"
import { AddTurnDto, Turn } from "./types"

export const setInitTurns = (turns: Turn[]): TurnsAction => ({
  type: TURNS_FETCH_INIT,
  turns,
})

export const deleteTurn = (turnId: number): TurnsAction => ({
  type: DELETE_TURN,
  turnId,
})

export const editTurnField = (key: string, value: any): TurnsAction => ({
  type: EDIT_TURN,
  key,
  value,
})

export const addNewTurn = (newTurn: AddTurnDto): TurnsAction => ({
  type: ADD_NEW_TURN,
  turn: newTurn
})

export const changeTurnById = (turnId: number) => ({
  type: CHANGE_TURN,
  turnId,
})