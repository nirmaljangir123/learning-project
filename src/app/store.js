 // store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/silce/showSlice";
import themeReducers from "../app/silce/themeSlice";

const store = configureStore({
  reducer: { 
    counter: counterReducer,
     theme: themeReducers
     },
});

export default store;
