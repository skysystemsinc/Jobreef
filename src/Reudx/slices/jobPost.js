import { job } from "@/schema/stateSchema";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: job,
  jobs: {
    activeJobs: false,
    inActiveJobs: false,
    allJobs: false,
  },
};

const jobPost = createSlice({
  name: "jobPost",
  initialState: initialState,
  reducers: {
    addJob: (state, action) => {
      console.log("action.payload", action.payload);
      state.value = action.payload;
    },
    setAllJobs: (state, action) => {
      const activeJobs = action.payload.filter((item) => item.active === true);
      const inActiveJobs = action.payload.filter(
        (item) => item.active === false
      );
      state.jobs.allJobs = action.payload;
      state.jobs.activeJobs = activeJobs;
      state.jobs.inActiveJobs = inActiveJobs;
    },
  },
});
export const { addJob, setAllJobs } = jobPost.actions;
export default jobPost.reducer;
