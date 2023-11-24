import {configureStore} from '@reduxjs/toolkit';
import MarvelReducer from '../Slices/GeneralSlice';

const store = configureStore({
  reducer:{
    marvel: MarvelReducer
  }
})

export default store;