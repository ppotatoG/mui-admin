import React, { useContext, useState } from 'react';
import { AppBar } from '@mui/material';
import { ThemeContext } from '@contexts/ThemeContext';
import UserMenu from '@layout/Header/UserMenu';
import CustomToolbar from '@layout/Header/CustomToolbar';
import themes from '@styles/themes';

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

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <>
      <AppBar
        position="static"
        style={{
          background: isDarkMode ? themes.dark.paper : themes.light.primary,
          fontSize: themes.fontSizes.medium,
          color: themes.light.paper,
        }}
      >
        <CustomToolbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
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
