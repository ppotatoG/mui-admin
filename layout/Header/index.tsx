import React, { useState } from 'react';
import { AppBar } from '@mui/material';
import UserMenu from '@layout/Header/UserMenu';
import CustomToolbar from '@layout/Header/CustomToolbar';
import themes from '@styles/themes';
import { useTheme } from '@hook/useTheme';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';

  const { theme, toggleTheme, isDarkMode } = useTheme();

  return (
    <>
      <AppBar
        position="static"
        style={{
          background: themes[theme].background,
          color: themes[theme].text,
          fontSize: 'var(--medium)',
        }}
      >
        <CustomToolbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleTheme}
          menuId={menuId}
          handleProfileMenuOpen={handleProfileMenuOpen}
        />
      </AppBar>
      <UserMenu
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </>
  );
};

export default Header;
