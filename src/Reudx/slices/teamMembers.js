import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const teamMembers = createSlice({
  name: "teamMembers",
  initialState: initialState,
  reducers: {
    getTeamMembers: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getTeamMembers } = teamMembers.actions;
export default teamMembers.reducer;
