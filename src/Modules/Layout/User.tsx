// Components
import { NoSsr, Box, Avatar, Menu } from '@mui/material';

function User() {
  return (
    <NoSsr defer>
      <Box className="user-panel">
        <Avatar className="avatar" onClick={() => console.log('a')}>
          H
        </Avatar>
      </Box>
    </NoSsr>
  );
}

export default User;
