import { useDispatch } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import filter from "./slice/filterSlice";
import cart from "./slice/cartSlice";
import pizzas from "./slice/pizzasSlice";

export const store = configureStore({
  reducer: { filter, cart, pizzas },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
