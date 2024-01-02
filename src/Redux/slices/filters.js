import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    filters: {
      sortBy: "",
      status: [],
      educationLevel: [],
      skills: [],
    },
    selectFilter: [],
  },
};
const filters = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value.filters =
        action.payload == false
          ? {
              sortBy: [],
              status: [],
              educationLevel: [],
              skills: [],
            }
          : action.payload;
    },
    setSelectFilter: (state, action) => {
      state.value.selectFilter = action.payload;
    },
  },
});
export const { setFilter, setSelectFilter } = filters.actions;
export default filters.reducer;
