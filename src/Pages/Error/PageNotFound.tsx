import { useEffect } from 'react';

import { Grid, NoSsr, Box } from '@mui/material';

import PageNotFoundHero from '../../Assets/Images/404-PageNotFound.svg';

function Maintenance() {
  useEffect(() => {
    document.title = 'Page Not Found';
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
              src={PageNotFoundHero}
              alt="maintenance"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
      </Grid>
    </NoSsr>
  );
}

export default Maintenance;
