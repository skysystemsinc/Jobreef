'use client'


import endPoints from "@/Utils/endpoints";
import { status } from "@/Utils/role";
import { get } from "@/helper/fetch";
import { job } from "@/schema/stateSchema";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: job,
  jobs: {
    activeJobs: false,
    inActiveJobs: false,
    allJobs: false,
    applicants: false,
  },
};
export const getSingleJob = createAsyncThunk("getSingleJob", async (id) => {
  try {
    const postData = await get(`${endPoints.jobs}/${id}`, "GET");
    return postData;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});
const jobPost = createSlice({
  name: "jobPost",
  initialState: initialState,
  reducers: {
    addJob: (state, action) => {
      console.log("action.payload", action.payload);
      state.value = action.payload;
    },
    setAllJobs: (state, action) => {
      const activeJobs = action.payload.filter(
        (item) => item.active === true && item.status == status.active
      );
      const inActiveJobs = action.payload.filter(
        (item) => item.active === false
      );
      state.jobs.allJobs = action.payload;
      state.jobs.activeJobs = activeJobs;
      state.jobs.inActiveJobs = inActiveJobs;
    },

  },
  extraReducers: (builder) => {

    builder.addCase(getSingleJob.pending, (state, action) => {
      state.value = false;
    });
    builder.addCase(getSingleJob.fulfilled, (state, action) => {
      state.value = action.payload.data;
    });
  },
});
export const { addJob, setAllJobs } = jobPost.actions;
export default jobPost.reducer;
