import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Pizzas = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

interface PizasSliceState {
  items: Pizzas[];
}

const initialState: PizasSliceState = {
  items: [],
};

export const pizasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Pizzas[]>) => {
      state.items = action.payload;
    },
  },
});

export const selectPizzas = (state: RootState) => state.pizzas;

export const { setItems } = pizasSlice.actions;

export default pizasSlice.reducer;
