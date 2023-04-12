import { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import themes from '@styles/themes';
import { ThemeContext } from '@contexts/ThemeContext';

interface ISectionProp {
  children: ReactNode;
}

const Section = ({ children }: ISectionProp) => {
  return <CustomSection>{children}</CustomSection>;
};

const CustomSection = styled.section`
  padding: ${() => themes.fontSizes.medium};

  background-color: ${() => {
    const { isDarkMode } = useContext(ThemeContext);
    return isDarkMode ? themes.dark.background : themes.light.background;
  }};
`;

export default Section;
