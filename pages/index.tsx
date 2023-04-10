import { Button } from '@components/Button';
import { useContext } from 'react';
import { ThemeContext } from '@contexts/ThemeContext';

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <Button variant="fill" color="primary" onClick={toggleDarkMode}>
        fill, primary
      </Button>
      <Button variant="fill" color="secondary" onClick={toggleDarkMode}>
        fill, secondary
      </Button>
      <Button variant="fill" color="error" onClick={toggleDarkMode}>
        fill, error
      </Button>
      <Button variant="fill" color="warning" onClick={toggleDarkMode}>
        fill, warning
      </Button>
      <Button variant="outline" color="primary" onClick={toggleDarkMode}>
        outline, primary
      </Button>
      <Button variant="outline" color="secondary" onClick={toggleDarkMode}>
        outline, secondary
      </Button>
      <Button variant="outline" color="error" onClick={toggleDarkMode}>
        outline, error
      </Button>
      <Button variant="outline" color="warning" onClick={toggleDarkMode}>
        outline, warning
      </Button>
      <Button variant="text" color="primary" onClick={toggleDarkMode}>
        text, primary
      </Button>
      <Button variant="text" color="secondary" onClick={toggleDarkMode}>
        text, secondary
      </Button>
      <Button variant="text" color="error" onClick={toggleDarkMode}>
        text, error
      </Button>
      <Button variant="text" color="warning" onClick={toggleDarkMode}>
        text, warning
      </Button>
    </>
  );
}
