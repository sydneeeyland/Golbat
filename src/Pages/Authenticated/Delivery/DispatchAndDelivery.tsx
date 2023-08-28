import { ErrorBoundary } from 'react-error-boundary';

import { NoSsr, Stack, Box } from '@mui/material';
import BreadCrumb from '../../../Components/BreadCrumb';
import FormContainer from '../../../Components/Container/FormContainer';

import ErrorFallback from '../../../Utils/ErrorFallback';
import ModalButton from '../../../Components/Buttons/ModalButton';
import SyncButton from '../../../Components/Buttons/SyncButton';
import FormTable from '../../../Components/Table/FormTable';

import { Module } from '../../../Constant/Application/Module';

function DispatchAndDelivery() {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BreadCrumb page="Dispatch & Delivery" />
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
                <SyncButton />
              </ErrorBoundary>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <ModalButton
                  module={Module.DISPATCH}
                  content="Create Delivery Trip"
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
            module={Module.DISPATCH}
            rowActions
            rowSelection={false}
            rowFilters
          />
        </ErrorBoundary>
      </Box>
    </NoSsr>
  );
}

export default DispatchAndDelivery;
