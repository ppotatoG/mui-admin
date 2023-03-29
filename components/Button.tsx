import { useSelector } from 'react-redux';
import themes from '@styles/themes';
import styled from 'styled-components';

const TextButton = styled.button`
  color: ${() => useSelector((state) => themes[state.currentTheme].paper)};
  font-size: ${() => themes.fontSizes.medium};
  padding: 8px 16px;
  border-radius: 4px;
`;

export { TextButton };
