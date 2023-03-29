import { combineReducers } from 'redux';
import darkModeReducer from './darkMode';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
