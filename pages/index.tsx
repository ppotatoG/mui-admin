import { useDispatch, useSelector } from 'react-redux';
import { TextButton } from '@components/Button';

export default function Home() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.currentTheme);

  const handleToggleTheme = () => {
    console.log('handleToggleTheme');
    console.log(currentTheme);
    dispatch({
      type: 'SET_THEME',
      payload: currentTheme === 'light' ? 'dark' : 'light',
    });
  };

  return <TextButton onClick={handleToggleTheme}>??</TextButton>;
}
