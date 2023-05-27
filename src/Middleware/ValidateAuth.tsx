import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { NoSsr } from '@mui/material';

import useValidateAuth from '../Hooks/useValidateAuth';

const SignIn = lazy(() =>
  import('../Pages/Authentication/SignIn').then((module) => {
    return { default: module.default };
  })
);

function ValidateAuth() {
  const { signedIn } = useValidateAuth();

  return <NoSsr defer>{signedIn ? <Outlet /> : <SignIn />}</NoSsr>;
}

export default ValidateAuth;
