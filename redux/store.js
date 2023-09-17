// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  devTools: true
});

export default store;
