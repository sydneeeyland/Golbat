import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';

import { useValidateAuthorizationMutation } from '../Redux/Slice/auth-slice';
import { StatusCodes } from '../Constant/Application/Http';

export default function useValidateAuth() {
  const cookie = new Cookies();
  const applicationStore = useSelector((store: any) => store);
  const [validateAuth] = useValidateAuthorizationMutation();
  const [authState, setAuthState] = useState({
    signedIn: false,
    status: 0,
    message: '',
    loading: false,
  });

  const handleLogout = () => {
    cookie.remove('RefreshToken');
    setAuthState({
      signedIn: false,
      status: 0,
      message: '',
      loading: false,
    });
    window.location.reload();
  };

  useEffect(() => {
    setAuthState((prev) => ({
      ...prev,
      status: 0,
      message: '',
      signedIn: cookie.get('RefreshToken') !== undefined,
    }));
  }, []);

  useEffect(() => {
    const { message, status } = applicationStore.auth.error;

    setAuthState((prev) => ({
      ...prev,
      status,
      message,
      loading: applicationStore.auth.loading,
    }));

    if (applicationStore.auth.error.status === StatusCodes.OK) {
      setAuthState((prev) => ({
        ...prev,
        status,
        message,
        loading: applicationStore.auth.loading,
      }));

      setTimeout(() => {
        setAuthState((prev) => ({
          ...prev,
          signedIn: cookie.get('RefreshToken') !== undefined,
        }));
      }, 2500);
    } else {
      setAuthState((prev) => ({
        ...prev,
        status,
        message,
        loading: applicationStore.auth.loading,
      }));
    }
  }, [applicationStore]);

  return { authState, validateAuth, handleLogout };
}
