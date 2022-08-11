import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  status: 'loading',
  countryItems: [],
};
export const fetchCountry = createAsyncThunk('country/fetchCountry', async (country) => {
  const { data } = await axios.get(
    `https://62f2850eb1098f150814b69a.mockapi.io/country?filter=${country}`,
  );
  return data;
});

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountry.pending]: (state, action) => {
      state.status = 'loading';
      state.countryItems = [];
    },
    [fetchCountry.fulfilled]: (state, action) => {
      state.status = 'success';
      state.countryItems = action.payload;
    },
    [fetchCountry.rejected]: (state, action) => {
      state.status = 'error';
      state.countryItems = [];
    },
  },
});

export default countrySlice.reducer;
