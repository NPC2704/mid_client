// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: true,
  },
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === true ? false : true;
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
