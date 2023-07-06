// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const responesiveSlice = createSlice({
  name: "respon",
  initialState: {
    responsive: "1",
  },
  reducers: {
    toggleResponsive: (state) => {
      state.responsive = state.responsive === "1" ? "0" : "1";
    },
  },
});

export const { toggleResponsive } = responesiveSlice.actions;
export default responesiveSlice.reducer;
