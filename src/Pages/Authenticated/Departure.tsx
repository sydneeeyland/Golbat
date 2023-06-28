import { ErrorBoundary } from 'react-error-boundary';

import { NoSsr, Stack, Box } from '@mui/material';
import { Archive } from '@mui/icons-material';
import BreadCrumb from '../../Components/BreadCrumb';
import FormContainer from '../../Components/Container/FormContainer';

import ErrorFallback from '../../Middleware/ErrorFallback';
import ModalButton from '../../Components/Buttons/ModalButton';
import FormTable from '../../Components/Table/FormTable';

import { Module } from '../../Constant/Application/Module';

function Departure() {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BreadCrumb page="Departure" />
      </ErrorBoundary>
      <FormContainer>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Stack direction="row" spacing="3" flexWrap="wrap">
            <Stack
              direction="row"
              gap={2}
              flexWrap="wrap"
              flex="1"
              justifyContent="end"
            >
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <ModalButton
                  module={Module.DEPARTURE_BOX}
                  variant="csi-secondary"
                  icon={<Archive />}
                  content="Import box to departure"
                  maxWidth="lg"
                />
              </ErrorBoundary>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <ModalButton
                  module={Module.DEPARTURE}
                  content="Create Departure"
                  maxWidth="lg"
                />
              </ErrorBoundary>
            </Stack>
          </Stack>
        </ErrorBoundary>
      </FormContainer>
      <Box sx={{ mt: 3 }}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <FormTable
            module={Module.DEPARTURE}
            rowActions
            rowSelection={false}
            rowFilters
          />
        </ErrorBoundary>
      </Box>
    </NoSsr>
  );
}

export default Departure;
