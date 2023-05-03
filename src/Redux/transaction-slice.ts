import { createSlice } from '@reduxjs/toolkit';

export const transaction = createSlice({
  name: 'transaction',
  initialState: {
    packinglist: [],
    emptybox: [],
    pickups: [],
    invoice: [],
  },
  reducers: {
    testFunction: () => {},
  },
});

export const { testFunction } = transaction.actions;
export default transaction.reducer;

/* ----------------------------------- API Mutation ---------------------------------- */
