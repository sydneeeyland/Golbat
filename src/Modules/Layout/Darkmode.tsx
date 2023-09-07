import { useRef, useState } from 'react';

import { IconButton, Badge, Menu, MenuItem, Box } from '@mui/material';
import { DarkMode } from '@mui/icons-material';

function Darkmode() {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <IconButton
        disableRipple
        color="secondary"
        sx={{ bgcolor: 'rgb(245, 245, 245)', borderRadius: '6px' }}
        ref={anchorRef}
        onClick={handleToggle}
      >
        <Badge color="warning">
          <DarkMode color="primary" />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorRef.current}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            width: 300,
            marginTop: '15px',
            boxShadow: 'unset',
            border: '1px solid #e2e2e2',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>Announcement</MenuItem>
      </Menu>
    </Box>
  );
}

export default Darkmode;
