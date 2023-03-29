import { useSelector } from 'react-redux';
import themes from '@styles/themes';
import styled from 'styled-components';
import { RootState } from '@stores';

const TextButton = styled.button`
  color: ${() =>
    useSelector((state: RootState) =>
      state.darkMode.isDarkMode ? themes.dark.paper : themes.light.paper,
    )};
  background: ${() =>
    useSelector((state: RootState) =>
      state.darkMode.isDarkMode ? themes.dark.text : themes.light.text,
    )};
  font-size: ${() => themes.fontSizes.medium};
  padding: 8px 16px;
  border-radius: 4px;
`;

export { TextButton };
