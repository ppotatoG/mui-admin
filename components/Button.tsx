import styled from 'styled-components';
import themes from '@styles/themes';
import { useContext } from 'react';
import { ThemeContext } from '@contexts/ThemeContext';

const Button = styled.button<IButton>`
  font-size: ${() => themes.fontSizes.medium};
  padding: 8px 16px;
  border-radius: 4px;

  background-color: ${({ variant, color }) => {
    const { isDarkMode } = useContext(ThemeContext);
    if (variant === 'fill') {
      return isDarkMode ? themes.dark[`${color}`] : themes.light[`${color}`];
    }
  }};

  color: ${({ variant, color }) => {
    const { isDarkMode } = useContext(ThemeContext);
    if (variant === 'outline' || variant === 'text') {
      return isDarkMode ? themes.dark[`${color}`] : themes.light[`${color}`];
    } else {
      return isDarkMode ? themes.dark.text : themes.light.text;
    }
  }};

  border: ${({ variant, color }) => {
    const { isDarkMode } = useContext(ThemeContext);
    if (variant === 'outline') {
      return isDarkMode
        ? `${themes.dark[`${color}`]} 1px solid`
        : `${themes.light[`${color}`]} 1px solid`;
    }
  }};
`;

export { Button };
