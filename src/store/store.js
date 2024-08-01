import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice'; // Adjust the path as necessary

// Create the store
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
