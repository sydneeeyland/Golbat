import { ErrorBoundary } from 'react-error-boundary';

import { NoSsr, Grid, Typography } from '@mui/material';
import FormContainer from '../../../Components/Container/FormContainer';

import ErrorFallback from '../../../Utils/ErrorFallback';

function Country() {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormContainer>
              <Typography>Table</Typography>
            </FormContainer>
          </Grid>
        </Grid>
      </ErrorBoundary>
    </NoSsr>
  );
}

export default Country;
