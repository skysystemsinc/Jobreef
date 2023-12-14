import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    allMembers: false,
    member: false,
  },
};

const teamMembers = createSlice({
  name: "teamMembers",
  initialState: initialState,
  reducers: {
    getTeamMembers: (state, action) => {
      if (typeof window != undefined) {
        const id = localStorage.getItem("id");
        const filterData = action.payload?.filter((item) => item.id != id);
        state.value.allMembers =filterData;
      }
    },
    addTeamMember: (state, action) => {
      state.value.member = action.payload;
    },
  },
});
export const { getTeamMembers, addTeamMember } = teamMembers.actions;
export default teamMembers.reducer;
