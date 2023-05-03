import { IconButton, Badge } from '@mui/material';
import { NotificationsOutlined } from '@mui/icons-material';

function Notification() {
  return (
    <IconButton aria-label="100" size="large">
      <Badge badgeContent={2} color="info">
        <NotificationsOutlined fontSize="inherit" color="primary" />
      </Badge>
    </IconButton>
  );
}

export default Notification;
