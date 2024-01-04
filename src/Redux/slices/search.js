import endPoints from "@/Utils/endpoints";
import { get } from "@/helper/fetch";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    searchResult: [],
    saved: false,
  },
};

export const savedApplications = createAsyncThunk(
  "savedApplications",
  async (id) => {
    try {
      const postData = await get(
        `${endPoints.applications}/${id}?saved=${true}`,
        "GET"
      );
      return postData;
    } catch (error) {
      console.log("error", error);
    }
    return error;
  }
);
const searchList = createSlice({
  name: "searchList",
  initialState: initialState,
  reducers: {
    setSearchResult: (state, action) => {
      state.value.searchResult = action.payload;
    },
    setSaved: (state, action) => {
      state.value.saved = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(savedApplications.pending, (state, action) => {
      state.value.saved = false;
    });
    builder.addCase(savedApplications.fulfilled, (state, action) => {
      
      state.value.saved = action.payload.data;
    });
  },
});
export const { setSearchResult, setSaved } = searchList.actions;
export default searchList.reducer;
