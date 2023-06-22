import { useEffect } from 'react';

import { Grid, NoSsr, Box, Typography } from '@mui/material';

import MaintenanceHero from '../../Assets/Images/maintenance.svg';

function Maintenance() {
  useEffect(() => {
    document.title = 'Maintenance';
  }, []);

  return (
    <NoSsr defer>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        direction="column"
      >
        <Grid item xs={12}>
          <Box minWidth="480px">
            <img
              src={MaintenanceHero}
              alt="maintenance"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Box component="h1">Maintenance</Box>
          <Typography>
            We are currently performing a maintenance and we are doing our best
          </Typography>
          <Typography>
            to return our service. We apologized for the inconvenience.
          </Typography>
        </Grid>
      </Grid>
    </NoSsr>
  );
}

export default Maintenance;
