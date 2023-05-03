import { IconButton, Badge } from '@mui/material';
import { CampaignOutlined } from '@mui/icons-material';

function Announcement() {
  return (
    <IconButton aria-label="100" size="large">
      <Badge badgeContent={1500} color="info">
        <CampaignOutlined fontSize="inherit" color="warning" />
      </Badge>
    </IconButton>
  );
}

export default Announcement;
