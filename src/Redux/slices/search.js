import endPoints from "@/Utils/endpoints";
import { get } from "@/helper/fetch";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    search: {
      searchResult: [],
      saved: false,
    },
    // filters: false,
  },
};
const searchList = createSlice({
  name: "searchList",
  initialState: initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.value.search.searchResult = action.payload;
    },
    setSaved: (state, action) => {
      state.value.search.saved = action.payload;
    },

  },
});
export const { setSearchResult, setSaved } = searchList.actions;
export default searchList.reducer;
