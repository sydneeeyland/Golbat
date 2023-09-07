import { Stack } from '@mui/material';

import Announcement from './Announcement';
import Notification from './Notification';
import User from './User';
import Darkmode from './Darkmode';

function Toolbar() {
  return (
    <Stack
      direction="row"
      flex={1}
      justifyContent="end"
      alignItems="center"
      spacing="10px"
      marginRight="20px"
    >
      <Announcement />
      <Notification />
      <Darkmode />
      <User />
    </Stack>
  );
}

export default Toolbar;