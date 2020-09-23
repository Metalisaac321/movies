import { createStore, combineReducers } from 'redux'
import { moviesReducer } from '../domain/Movies/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { turnsReducer } from '../domain/Turns/reducer';


export const rootReducer = combineReducers({
  moviesState: moviesReducer,
  turnsState: turnsReducer
});

export default createStore(
  rootReducer,
  devToolsEnhancer({}),
);
export type RootState = ReturnType<typeof rootReducer>
