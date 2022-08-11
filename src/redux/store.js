import { configureStore } from '@reduxjs/toolkit';
import search from './slice/searchSlice';
import country from './slice/countrySlice';
import films from './slice/filmsSlice';
export const store = configureStore({
  reducer: {
    search,
    country,
    films,
  },
});
