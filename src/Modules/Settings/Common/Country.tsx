import { ErrorBoundary } from 'react-error-boundary';

import { NoSsr, Grid } from '@mui/material';
import FormContainer from '../../../Components/Container/FormContainer';
import FormTable from '../../../Components/Table/FormTable';

import ErrorFallback from '../../../Utils/ErrorFallback';

import { Module } from '../../../Constant/Application/Module';

function Country() {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormContainer>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <FormTable
                  module={Module.COUNTRY}
                  rowActions
                  rowSelection={false}
                  rowFilters
                />
              </ErrorBoundary>
            </FormContainer>
          </Grid>
        </Grid>
      </ErrorBoundary>
    </NoSsr>
  );
}

export default Country;
