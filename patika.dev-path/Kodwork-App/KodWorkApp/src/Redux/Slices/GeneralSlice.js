import {createSlice} from '@reduxjs/toolkit';

export const JobSlices = createSlice({
  name: 'jobs',
  initialState: {
    data: [],
    favorites: [],
  },
  reducers: {},
});

export const {} = JobSlices.actions;

export default JobSlices.reducer;
