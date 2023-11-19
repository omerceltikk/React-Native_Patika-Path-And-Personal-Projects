import {createSlice} from '@reduxjs/toolkit';

export const JobSlices = createSlice({
  name: 'jobs',
  initialState: {
    data: [],
  },
  reducers: {
    addFavorites:(state,action) => {
      const isFinded = state.data.find((item) => item.id == action.payload.id);
      if(isFinded){
      } else {
        state.data = [...state.data,action.payload];
      }
    },
    removeFavorites:(state,action) => {
    state.data = state.data.filter((item) => item.id != action.payload); 
    },
  },
});

export const {addFavorites,removeFavorites,setError} = JobSlices.actions;

export default JobSlices.reducer;
