// Package
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import { NoSsr } from '@mui/material';

// Pages
const SignIn = lazy(() =>
  import('../Pages/Authentication/SignIn').then((module) => {
    return { default: module.default };
  })
);

function ValidateAuth() {
  const SignedIn = true;

  return <NoSsr defer>{SignedIn ? <Outlet /> : <SignIn />}</NoSsr>;
}

export default ValidateAuth;
