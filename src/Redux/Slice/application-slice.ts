import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './api-slice';

export const application = createSlice({
  name: 'application',
  initialState: {
    'jp-prefecture': [],
    'jp-city': [],
    'jp-town': [],
    'ph-province': [],
    'ph-city': [],
    packinglist: [],
    emptybox: [],
    dispatch: [],
    fleet: [],
    roaming: [],
    telemarketing: [],
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
      ...state.error,
      ...payload,
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
      query: () => 'packinglist.json?key=9410efa0',
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          dispatch(handleAsyncFetch(true));
          const { data } = await queryFulfilled;
          dispatch(updatePackinglist(data));
          dispatch(handleAsyncFetch(false));
        } catch (err) {
          dispatch(handleError(err));
        }
      },
    }),
  }),
});

export const { useCacheInitialDataQuery } = applicationApi;
