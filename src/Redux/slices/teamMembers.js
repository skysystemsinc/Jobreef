import endPoints from "@/Utils/endpoints";
import { get } from "@/helper/fetch";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    allMembers: false,
    member: false,
  },
};
export const teamMemberList = createAsyncThunk("teamMemberList", async (id) => {
  try {
    const postData = await get(`${endPoints.teamMember}/${id}`, "GET");
    return postData;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});
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
  extraReducers: (builder) => {
    builder.addCase(teamMemberList.pending, (state, action) => {
      state.value.allMembers = false;
    });
    builder.addCase(teamMemberList.fulfilled, (state, action) => {
      state.value.allMembers = action.payload.data;
    });
  },
});
export const { getTeamMembers, addTeamMember } = teamMembers.actions;
export default teamMembers.reducer;
