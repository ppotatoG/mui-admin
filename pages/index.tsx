import { RootState } from '@stores';
import { useDispatch, useSelector } from 'react-redux';
import { TextButton } from '@components/Button';

export default function Home() {
  const dispatch = useDispatch();
  const currentTheme = useSelector(
    (state: RootState) => state.darkMode.isDarkMode,
  );

  const handleToggleTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME',
      payload: currentTheme,
    });
  };

  return <TextButton onClick={handleToggleTheme}>??</TextButton>;
}
