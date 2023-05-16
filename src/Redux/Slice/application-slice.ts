import { createSlice } from '@reduxjs/toolkit';
import { PackinglistData } from '../../Constant/Application/MockData';

export const application = createSlice({
  name: 'application',
  initialState: {
    'jp-prefecture': [],
    'jp-city': [],
    'jp-town': [],
    'ph-province': [],
    'ph-city': [],
    packinglist: PackinglistData,
    emptybox: [],
  },
  reducers: {
    testFunction: () => {},
  },
});

export const { testFunction } = application.actions;
export default application.reducer;

/* ----------------------------------- API Mutation ---------------------------------- */
