import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my.api.mockaroo.com/',
  }),
  tagTypes: ['Quotes'],
  endpoints: () => ({}),
});
