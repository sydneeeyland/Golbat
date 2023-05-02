// Package
import { ErrorBoundary } from 'react-error-boundary';

// Components
import { NoSsr } from '@mui/material';
import BreadCrumb from '../../Components/BreadCrumb';
import FormContainer from '../../Components/Container/FormContainer';

// Middleware
import ErrorFallback from '../../Middleware/ErrorFallback';
import ActionButton from '../../Components/Form/ActionButton';

function Dashboard() {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BreadCrumb page="Dashboard" />
      </ErrorBoundary>
      <FormContainer>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ActionButton module="packinglist" />
        </ErrorBoundary>
      </FormContainer>
    </NoSsr>
  );
}

export default Dashboard;
