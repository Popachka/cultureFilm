import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  items: [],
  Allfilms: [],
  status: 'loading',
};
export const fetchFilms = createAsyncThunk('search/fetchFilms', async () => {
  const { data } = await axios.get(`https://62f2850eb1098f150814b69a.mockapi.io/films`);
  return data;
});
const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    filterItems(state, action) {
      state.items = state.Allfilms.map((obj) => {
        if (action.payload.includes(obj.country)) {
          return obj;
        }
      });
      state.items = state.items.filter((obj) => {
        return obj !== undefined;
      });
    },
  },
  extraReducers: {
    [fetchFilms.pending]: (state, action) => {
      state.status = 'loading';
      state.Allfilms = [];
    },
    [fetchFilms.fulfilled]: (state, action) => {
      state.status = 'success';
      state.Allfilms = action.payload;
    },
    [fetchFilms.rejected]: (state, action) => {
      state.status = 'error';
      state.Allfilms = [];
    },
  },
});
export const { filterItems, setClose } = filmsSlice.actions;
export default filmsSlice.reducer;
