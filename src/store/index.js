import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    [boardsSlice.name]: boardsSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
  },
});

export default store;
