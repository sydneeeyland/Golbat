/* eslint-disable  @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import jwt from 'jwt-decode';
import Cookies from 'universal-cookie';

import { apiSlice } from './api-slice';

import { MethodTypes, StatusCodes } from '../../Constant/Application/Http';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    error: [],
    loading: false,
  },
  reducers: {
    handleLoading: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
    handleError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
});

export const { handleLoading, handleError } = auth.actions;
export default auth.reducer;

/* ----------------------------------- API Mutation ---------------------------------- */

export const authorizationAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    validateAuthorization: builder.mutation<unknown, any>({
      query: (credential) => ({
        url: 'auth/login',
        method: MethodTypes.POST,
        body: {
          email: credential.email,
          password: credential.password,
        },
        credentials: 'include',
        responseHandler: (response) => response.text(),
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        dispatch(handleLoading(true));
        try {
          const res = await queryFulfilled;
          const { meta } = res;

          if (meta?.response?.status === StatusCodes.OK) {
            const cookies = new Cookies();

            const authToken: string | any =
              meta.response.headers.get('Authorization');
            const refreshToken: string | any =
              meta.response.headers.get('refreshToken');

            const decodedAuth: any = jwt(authToken);
            const decodedRefresh: any = jwt(refreshToken);

            cookies.set('Authorization', auth, {
              expires: new Date(decodedAuth.exp * 1000),
            });
            cookies.set('RefreshToken', refreshToken, {
              expires: new Date(decodedRefresh.exp * 1000),
            });

            dispatch(
              handleError({
                message: 'Crendentials validated redirecting to dashboard...',
                status: 200,
              })
            );
          }
          dispatch(handleLoading(false));
        } catch ({ error }: any) {
          dispatch(
            handleError({
              ...JSON.parse(error.data),
              status: 400,
            })
          );
          dispatch(handleLoading(false));
        }
      },
    }),
  }),
});

export const { useValidateAuthorizationMutation } = authorizationAPI;
