import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    switchTheme: (state, action) => {
      state.theme = state.theme == "light" ? "dark" : "light";
    },
  },
  selectors: {
    selectTheme: (state) => state.theme,
  },
});

export const { switchTheme } = themeSlice.actions;

export const { selectTheme } = themeSlice.selectors;

export default themeSlice;
