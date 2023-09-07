/* eslint-disable  @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './api-slice';

import {
  MethodTypes,
  ErrorTypes,
  ErrorContents,
} from '../../Constant/Application/Http';

export const application = createSlice({
  name: 'application',
  initialState: {
    pickups: [],
    emptybox: [],
    packinglist: [],
    invoice: [],
    departure: [],
    dispatch: [],
    fleet: [],
    roaming: [],
    telemarketing: [],
    country: [],
    state: [],
    city: [],
    town: [],
    loading: false,
    error: [],
  },
  reducers: {
    updatePackinglist: (state, { payload }) => ({
      ...state,
      packinglist: payload,
    }),
    handleAsyncFetch: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
    handleError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
});

export const { updatePackinglist, handleAsyncFetch, handleError } =
  application.actions;
export default application.reducer;

/* ----------------------------------- API Mutation ---------------------------------- */

export const applicationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    CacheInitialData: builder.query<unknown, void>({
      query: () => ({
        url: 'packinglist.json',
        method: MethodTypes.GET,
        headers: {
          'X-API-Key': '9410efa0',
        },
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          console.log('a');
          dispatch(handleAsyncFetch(true));
          const { data } = await queryFulfilled;
          dispatch(updatePackinglist(data));
          dispatch(handleAsyncFetch(false));
        } catch (err: any) {
          const { error } = err;
          if (error.status === 'FETCH_ERROR') {
            dispatch(handleAsyncFetch(false));
            dispatch(
              handleError({
                open: true,
                type: ErrorTypes.FETCH,
                variant: 'warning',
                content: ErrorContents.FETCH,
              })
            );
          }
        }
      },
    }),
  }),
});

export const { useCacheInitialDataQuery } = applicationApi;
