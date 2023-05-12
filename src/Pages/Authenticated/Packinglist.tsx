import { ErrorBoundary } from 'react-error-boundary';

import { NoSsr, Stack } from '@mui/material';
import BreadCrumb from '../../Components/BreadCrumb';
import FormContainer from '../../Components/Container/FormContainer';

import ErrorFallback from '../../Middleware/ErrorFallback';
import ModalButton from '../../Components/Buttons/ModalButton';
import SyncButton from '../../Components/Buttons/SyncButton';

function Packinglist() {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BreadCrumb page="Dashboard" />
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
                  module="packinglist"
                  content="Add Record"
                  maxWidth="lg"
                />
              </ErrorBoundary>
            </Stack>
          </Stack>
        </ErrorBoundary>
      </FormContainer>
    </NoSsr>
  );
}

export default Packinglist;
