import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  selected: 0,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValueSearch(state, action) {
      state.value = action.payload;
      if (state.value === '') {
        state.selected = 0;
      }
    },
    clearSearch(state, action) {
      state.value = '';
      state.selected = 0;
    },
    setCountry(state, action) {
      state.value = action.payload;
      state.selected = 1;
    },
  },
});

export const { setValueSearch, clearSearch, setCountry } = searchSlice.actions;

export default searchSlice.reducer;
