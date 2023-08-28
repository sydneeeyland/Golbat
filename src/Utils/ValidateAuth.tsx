import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Loadable from '../Components/Loader/Loadable';

import { NoSsr } from '@mui/material';

import useValidateAuth from '../Hooks/useValidateAuth';

const SignIn = Loadable(
  lazy(() =>
    import('../Pages/Authentication/SignIn').then((module) => {
      return { default: module.default };
    })
  )
);

function ValidateAuth() {
  const { authState } = useValidateAuth();

  return <NoSsr defer>{authState.signedIn ? <Outlet /> : <SignIn />}</NoSsr>;
}

export default ValidateAuth;
