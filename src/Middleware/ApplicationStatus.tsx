// Package
import { ReactNode, lazy } from 'react';

// Components
import { NoSsr } from '@mui/material';

// Pages
const Maintenance = lazy(() =>
  import('../Pages/Error/Maintenance').then((module) => {
    return { default: module.default };
  })
);

type Props = {
  children: ReactNode;
};

function ApplicationStatus({ children }: Props) {
  const MaintenanceMode = false;

  return <NoSsr defer>{MaintenanceMode ? <Maintenance /> : children}</NoSsr>;
}

export default ApplicationStatus;
