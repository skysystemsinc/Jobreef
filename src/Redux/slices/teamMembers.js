import endPoints from "@/Utils/endpoints";
import { get } from "@/helper/fetch";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    allMembers: false,
    member: false,
    formData: false,
  },
};
export const teamMemberList = createAsyncThunk("teamMemberList", async ({id, companyId}) => {
  try {
    const postData = await get(`${endPoints.teamMember}/${id}?companyId=${companyId}`, "GET");
    return postData;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});
export const getSingleMember = createAsyncThunk("member", async (id) => {
  try {
    const postData = await get(`${endPoints.user}/${id}`, "GET");
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
    addFormData: (state, action) => {
      state.value.formData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(teamMemberList.pending, (state, action) => {
      state.value.allMembers = false;
    });
    builder.addCase(teamMemberList.fulfilled, (state, action) => {
      state.value.allMembers = action.payload.data;
    });
    builder.addCase(getSingleMember.pending, (state, action) => {
      state.value.formData = false;
    });
    builder.addCase(getSingleMember.fulfilled, (state, action) => {
      state.value.formData = action.payload.data;
    });
  },
});
export const { getTeamMembers, addTeamMember, addFormData } =
  teamMembers.actions;
export default teamMembers.reducer;
