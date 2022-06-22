import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Max" },
  { id: "1", name: "John" },
  { id: "2", name: "pitter" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
