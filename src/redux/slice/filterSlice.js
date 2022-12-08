import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: { name: "↑популярности", sortProperty: "rating" },
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setCurrentPage, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
