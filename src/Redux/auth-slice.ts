import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    userName: '',
    token: '',
  },
  reducers: {
    testFunction: () => {},
  },
});

export const { testFunction } = auth.actions;
export default auth.reducer;

/* ----------------------------------- API Mutation ---------------------------------- */
