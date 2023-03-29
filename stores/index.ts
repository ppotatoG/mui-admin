import { createStore } from 'redux';

// types
interface ThemeState {
  currentTheme: string;
}

interface ThemeAction {
  type: string;
  payload: string;
}

// reducer

const initialState: ThemeState = {
  currentTheme: 'light',
};

const themeReducer = (
  state: ThemeState = initialState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, currentTheme: action.payload };
    default:
      return state;
  }
};

// store
export const store = createStore(themeReducer);
