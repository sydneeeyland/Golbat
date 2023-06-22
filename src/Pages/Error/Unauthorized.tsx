import { useEffect } from 'react';

import { Grid, NoSsr, Box } from '@mui/material';

import UnauthorizedHero from '../../Assets/Images/unauthorized.svg';

function Unauthorized() {
  useEffect(() => {
    document.title = 'Unauthorized';
  }, []);

  return (
    <NoSsr defer>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
        direction="column"
      >
        <Grid item xs={12}>
          <Box minWidth="480px">
            <img
              src={UnauthorizedHero}
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

export default Unauthorized;
