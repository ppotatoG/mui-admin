interface IDarkModeState {
  isDarkMode: boolean;
}

interface IDarkModeAction {
  type: 'SET_THEME' | 'TOGGLE_THEME';
  payload: boolean;
}
