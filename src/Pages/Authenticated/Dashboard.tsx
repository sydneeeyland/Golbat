// Pages
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Components
import { NoSsr } from '@mui/material';
import BreadCrumb from '../../Components/BreadCrumb';

// Middleware
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
