import styled from 'styled-components';
import { useContext } from 'react';
import themes from '@styles/themes';
import { ThemeContext } from '@contexts/ThemeContext';

const Navigate = () => {
  return (
    <Nav>
      <ul>
        <li>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
        <li>menu4</li>
        <li>menu5</li>
        <li>menu6</li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: ${() => {
    const { isDarkMode } = useContext(ThemeContext);
    return isDarkMode ? themes.dark.paper : themes.light.primary;
  }};
  color: ${() => themes.light.paper};
  padding: ${() => themes.fontSizes.medium};
`;

export default Navigate;
