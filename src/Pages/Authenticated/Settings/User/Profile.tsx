import { ErrorBoundary } from 'react-error-boundary';

import { NoSsr } from '@mui/material';
import BreadCrumb from '../../../../Components/BreadCrumb';

import ErrorFallback from '../../../../Utils/ErrorFallback';

function Profile() {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BreadCrumb page="Profile" />
      </ErrorBoundary>
    </NoSsr>
  );
}

export default Profile;
