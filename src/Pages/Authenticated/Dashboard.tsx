// Pages
import { ErrorBoundary } from 'react-error-boundary';

// Components
import { NoSsr } from '@mui/material';
import BreadCrumb from '../../Components/BreadCrumb';
import FormContainer from '../../Components/Container/FormContainer';

// Middleware
import ErrorFallback from '../../Middleware/ErrorFallback';
import ActionTab from '../../Components/Form/ActionTab';

function Dashboard() {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BreadCrumb page="Dashboard" />
      </ErrorBoundary>
      <FormContainer>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ActionTab />
        </ErrorBoundary>
      </FormContainer>
    </NoSsr>
  );
}

export default Dashboard;
