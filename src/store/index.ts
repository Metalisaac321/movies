import { createStore, combineReducers } from 'redux'
import { moviesReducer } from '../domain/Movies/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';


export const rootReducer = combineReducers({
  moviesState: moviesReducer,
});

export default createStore(
  rootReducer,
  devToolsEnhancer({}),
);
export type RootState = ReturnType<typeof rootReducer>
