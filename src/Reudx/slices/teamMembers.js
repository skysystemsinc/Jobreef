import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    allMembers:false,
    member:false,
  },
};

const teamMembers = createSlice({
  name: "teamMembers",
  initialState: initialState,
  reducers: {
    getTeamMembers: (state, action) => {
      state.value.allMembers = action.payload;
    },
    addTeamMember: (state, action) => {
      state.value.member = action.payload;
    },
  },
});
export const { getTeamMembers ,addTeamMember } = teamMembers.actions;
export default teamMembers.reducer;
