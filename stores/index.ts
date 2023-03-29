// stores/index.ts
import { combineReducers, createStore } from 'redux';
import darkModeReducer from './darkMode';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
