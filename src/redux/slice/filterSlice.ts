import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum sortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
  NAME_DESC = "name",
  NAME_ASC = "-name",
}

export type Sort = {
  name: string;
  sortProperty: sortPropertyEnum;
};

interface FilterSliceState {
  categoryId: number;
  currentPage: number;
  searchValue: string;
  sort: Sort;
}

const initialState: FilterSliceState = {
  categoryId: 0,
  currentPage: 1,
  sort: { name: "↑популярности", sortProperty: sortPropertyEnum.RATING_DESC },
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const { setCategoryId, setCurrentPage, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
