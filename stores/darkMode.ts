const initialState: IDarkModeState = {
  isDarkMode: false,
};

const darkModeReducer = (
  state = initialState,
  action: IDarkModeAction,
): IDarkModeState => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
