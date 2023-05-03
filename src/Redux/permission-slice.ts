import { createSlice } from '@reduxjs/toolkit';

export const permission = createSlice({
  name: 'application',
  initialState: {
    modules: [],
  },
  reducers: {
    testFunction: () => {},
  },
});

export const { testFunction } = permission.actions;
export default permission.reducer;

/* ----------------------------------- API Mutation ---------------------------------- */
