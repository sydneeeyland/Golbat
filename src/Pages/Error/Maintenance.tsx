import { Box, Typography, NoSsr } from '@mui/material';

import { useMaintenanceStyles } from '../../Assets/Styles/MaintenanceStyles';

function Maintenance() {
  const Style = useMaintenanceStyles();

  return (
    <NoSsr defer>
      <Box className={Style.wrapper}>
        <Box component="h1">MAINTENANCE MODE</Box>
        <Box className={Style.descriptionBox}>
          <Box className={Style.descriptionContent} component="h3">
            Sorry for the inconvenience.
          </Box>
          <Box className={Style.descriptionContent} component="h3">
            Our website is currently undergoing scheduled
          </Box>
          <Box className={Style.descriptionContent} component="h3">
            maintenance
          </Box>
        </Box>
        <Typography>Thank you for your understanding.</Typography>
      </Box>
    </NoSsr>
  );
}

export default Maintenance;
