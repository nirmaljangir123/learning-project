import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: localStorage.getItem("themeColor"),
  loading: false,
  error: false,
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      localStorage.setItem("themeColor", action.payload);
      state.theme = action.payload;
    },
    deleteTheme: (state, action) => {
      state.theme = localStorage.clear();
    },
  },
});
export const { setTheme, deleteTheme } = themeSlice.actions;
export default themeSlice.reducer;
