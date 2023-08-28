import { useState, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  NoSsr,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
  ListItemIcon,
  IconButton,
} from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';

import { UserMenuPaperProps } from '../../Assets/Styles/MainLayoutStyles';

import useValidateAuth from '../../Hooks/useValidateAuth';

function User() {
  const navigate = useNavigate();
  const { handleLogout } = useValidateAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
    setShowMenu(true);
  }, []);

  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <NoSsr defer>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={showMenu ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={showMenu ? 'true' : undefined}
          >
            <Avatar>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorElement}
        id="account-menu"
        open={showMenu}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={UserMenuPaperProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{ left: -5 }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Statistics
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => navigate('/user/profile')}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          User Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </NoSsr>
  );
}

export default memo(User);
