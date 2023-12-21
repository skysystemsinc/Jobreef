import endPoints from "@/Utils/endpoints";
import { get } from "@/helper/fetch";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   value: job,

  value: {
    applicants: {
      all: false,
      archived: false,
    },
    matchCandidate: false,
    search: false,
  },
};
export const jobApplicants = createAsyncThunk("jobApplicants", async (id) => {
  try {
    const postData = await get(`${endPoints.jobs}/${id}`, "GET");
    return postData;
  } catch (error) {
    console.log("error", error);
  }
  return error;
});
const jobApplicantList = createSlice({
  name: "jobApplicantList",
  initialState: initialState,
  reducers: {
    setArchived: (state, action) => {
      state.value.applicants.archived = action.payload;
    },
    setAll: (state, action) => {
      state.value.applicants.all = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(jobApplicants.fulfilled, (state, action) => {
      const all = action.payload.data.applications.filter(
        (item) => item.archived == false
      );
      const archived = action.payload.data.applications.filter(
        (item) => item.archived == true
      );
      state.value.applicants.all = all;
      state.value.applicants.archived = archived;
    });
    builder.addCase(jobApplicants.pending, (state, action) => {
      state.value.applicants.all = false;
      state.value.applicants.archived = false;
    });
    // [jobApplicants.fulfilled]: (state, action) => {
    //   const all = action.payload.data.applications.filter(
    //     (item) => item.archived == false
    //   );
    //   const archived = action.payload.data.applications.filter(
    //     (item) => item.archived == true
    //   );
    //   state.value.applicants.all = all;
    //   state.value.applicants.archived = archived;
    // },
    // [getTodos.pending]: (state) => {
    //   state.status = "Fetching todos. Please wait a moment...";
    // },
    // [getTodos.rejected]: (state) => {
    //   state.status = "Failed to fetch data...";
    // }
  },
});
export const { setArchived ,setAll } = jobApplicantList.actions;
export default jobApplicantList.reducer;
