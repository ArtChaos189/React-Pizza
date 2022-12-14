import { calcTotalPrice } from "lib/utils/calculateTotalPrice";
import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";

const initialState: CartSliceState = {
  pizzas: [],
  totalPrice: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItem>) {
      const findItem = state.pizzas.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      }
      if (!findItem) {
        state.pizzas.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.pizzas);
    },

    removeItems(state, action: PayloadAction<string>) {
      state.pizzas = state.pizzas.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.pizzas);
    },
    clearItems(state) {
      state.pizzas = [];
      state.totalPrice = 0;
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.pizzas.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.pizzas);
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export const { addItems, removeItems, clearItems, minusItem } = CartSlice.actions;

export default CartSlice.reducer;
