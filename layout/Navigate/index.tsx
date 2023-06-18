import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const Navigate = () => {
  return (
    <Nav>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        MUI
      </Typography>

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
  color: ${({ theme }) => theme.text};
  padding: var(--medium);
  background: ${({ theme }) => theme.primary};
`;

export default Navigate;
