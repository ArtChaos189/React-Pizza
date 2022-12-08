import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const pizasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizasSlice.actions;

export default pizasSlice.reducer;
