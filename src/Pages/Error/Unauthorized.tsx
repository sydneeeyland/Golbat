import { Grid, NoSsr, Box } from '@mui/material';

import UnauthorizedHero from '../../Assets/Images/401-Unauthorized.svg';

function Unauthorized() {
  return (
    <NoSsr defer>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        minHeight="85vh"
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
