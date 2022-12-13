import { calcTotalPrice } from "../../../lib/utilis/calcTotalPrice";
import { getCartFromLS } from "../../../lib/utilis/getCartFromLC";
import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSliceState } from "./types";

const cartData = getCartFromLS();

const initialState: CartSliceState = {
  items: cartData.items,
  totalPrice: cartData.totalPrice,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },

    removeItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export const { addItems, removeItems, clearItems, minusItem } = CartSlice.actions;

export default CartSlice.reducer;
