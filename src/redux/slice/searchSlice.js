import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValueSearch(state, action) {
      state.value = action.payload;
    },
    clearSearch(state, action) {
      state.value = '';
    },
  },
});

export const { setValueSearch, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
