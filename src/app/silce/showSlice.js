import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  loading: false,
  error: false,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload;
      state.loading = true;
      state.error = false;
    },
    createUser: (state, action) => {
      const newData = action.payload;
      state.users.push(newData);
      state.loading = false;
    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      state.users = state.users.filter((user) => user.id !== userIdToDelete);
      state.loading = false;
    },
  },
});

export const { getUser, createUser, deleteUser } = counterSlice.actions;
export default counterSlice.reducer;
