import React from 'react';
import { Menu, MenuItem } from '@mui/material';

interface IUserMenuProp {
  anchorEl: null | HTMLElement;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

const UserMenu = ({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
}: IUserMenuProp) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

export default UserMenu;
