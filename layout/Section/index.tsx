import { ReactNode } from 'react';
import styled from 'styled-components';

interface ISectionProp {
  children: ReactNode;
}

const Section = ({ children }: ISectionProp) => {
  return <CustomSection>{children}</CustomSection>;
};

const CustomSection = styled.section`
  padding: var(--medium);
  background: ${({ theme }) => theme.background};
`;

export default Section;
