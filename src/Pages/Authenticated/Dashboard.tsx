import { ErrorBoundary } from 'react-error-boundary';

import { NoSsr } from '@mui/material';
import BreadCrumb from '../../Components/BreadCrumb';

import ErrorFallback from '../../Middleware/ErrorFallback';

function Dashboard() {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BreadCrumb page="Dashboard" />
      </ErrorBoundary>
    </NoSsr>
  );
}

export default Dashboard;
