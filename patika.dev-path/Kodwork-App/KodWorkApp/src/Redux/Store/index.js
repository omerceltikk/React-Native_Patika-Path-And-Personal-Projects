import {configureStore} from '@reduxjs/toolkit';
import jobReducer from '../Slices/GeneralSlice';

const store = configureStore({
  reducer:{
    jobs: jobReducer
  }
})

export default store;