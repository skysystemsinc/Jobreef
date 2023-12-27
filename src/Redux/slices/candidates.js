import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    all: false,
    filter: false,
    selected: false,
  },
};

const candidates = createSlice({
  name: "candidates",
  initialState: initialState,
  reducers: {
    getAllCandidates: (state, action) => {
      state.value.all = action.payload;
    },
    getFilterCandidates: (state, action) => {
      state.value.filter = action.payload;
    },
    getSelectedCandidates: (state, action) => {
      state.value.selected = {
        ...action.payload,
        ...action.payload.employee,
        ...action.payload.employee.user,
      };
    },
  },
});
export const { getAllCandidates, getFilterCandidates, getSelectedCandidates } =
  candidates.actions;
export default candidates.reducer;
