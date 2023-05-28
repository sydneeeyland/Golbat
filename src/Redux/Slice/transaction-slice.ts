import { createSlice } from '@reduxjs/toolkit';

export const transaction = createSlice({
  name: 'transaction',
  initialState: {
    packinglit: [],
    emptybox: [],
    pickups: [],
    invoice: [],
  },
  reducers: {
    handleInputChange: (state, { payload }) => {
      state[payload.module as keyof typeof state] = {
        ...state[payload.module as keyof typeof state],
        ...payload,
      };
    },
  },
});

export const { handleInputChange } = transaction.actions;
export default transaction.reducer;

// TODO Create AutoFill, AutoCompute Function VIA API Mutation
// TODO Create Function to Validate input and store on validation success

/* ----------------------------------- API Mutation ---------------------------------- */
