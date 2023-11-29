import {createSlice} from '@reduxjs/toolkit';

export const JobSlices = createSlice({
  name: 'marvel',
  initialState: {
    data: [],
    isLoggedIn: false,
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
    isLoggedIn:(state,action) => {
      state.isLoggedIn = action.payload;
    }
  },
});

export const {addFavorites,removeFavorites,isLoggedIn} = JobSlices.actions;

export default JobSlices.reducer;
