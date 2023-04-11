import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Box } from '@mui/material';
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

  useEffect(() => {
    console.log(isDarkMode ? 'dark' : 'light');
    console.log(themes.dark);
    console.log(themes.light);
  }, [isDarkMode]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: isDarkMode ? themes.dark.paper : themes.light.primary,
          fontSize: themes.fontSizes.medium,
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
    </Box>
  );
};

export default Header;
