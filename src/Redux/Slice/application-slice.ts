import { createSlice } from '@reduxjs/toolkit';

export const application = createSlice({
  name: 'application',
  initialState: {
    'jp-prefecture': [],
    'jp-city': [],
    'jp-town': [],
    'ph-province': [],
    'ph-city': [],
  },
  reducers: {
    testFunction: () => {},
  },
});

export const { testFunction } = application.actions;
export default application.reducer;

/* ----------------------------------- API Mutation ---------------------------------- */
