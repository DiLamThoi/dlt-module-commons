import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const patternSlice = createSlice({
  name: 'pattern',
  initialState,
  reducers: {
    setValue: (state, action) => {
        state.value = action.payload;
    },
    getValue: (state) => {
        return state.value;
    }
  },
});

export const {
    setValue,
    getValue,
} = patternSlice.actions;

export default patternSlice.reducer;
