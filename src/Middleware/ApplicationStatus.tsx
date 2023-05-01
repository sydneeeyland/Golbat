// Package
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import { NoSsr } from '@mui/material';

// Pages
const Maintenance = lazy(() =>
  import('../Pages/Error/Maintenance').then((module) => {
    return { default: module.default };
  })
);

function ApplicationStatus() {
  const MaintenanceMode = false;

  return <NoSsr defer>{MaintenanceMode ? <Maintenance /> : <Outlet />}</NoSsr>;
}

export default ApplicationStatus;
