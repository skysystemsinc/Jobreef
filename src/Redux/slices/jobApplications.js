import endPoints from "@/Utils/endpoints";
import { get } from "@/helper/fetch";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   value: job,

  value: {
    application: {
      all: false,
      archived: false,
      shortListed: false,
    },
    candidate: false,
    shortlisted: false,
    selectedJob: false,
  },
};
export const jobApplications = createAsyncThunk(
  "jobApplications",
  async ({ id, body }) => {
    try {
      const postData = await get(
        `${endPoints.applications}/${id}`
      );
      return postData;
    } catch (error) {
      console.log("error", error);
    }
    return error;
  }
);
const jobApplicantList = createSlice({
  name: "jobApplicantList",
  initialState: initialState,
  reducers: {
    setArchived: (state, action) => {
      state.value.application.archived = action.payload;
    },
    setAll: (state, action) => {
      state.value.application.all = action.payload;
    },
    setShortList: (state, action) => {
      state.value.application.shortListed = action.payload;
    },
    setSelectedCandidate: (state, action) => {
      state.value.candidate = action.payload;
    },
    setSelectedJob: (state, action) => {
      state.value.selectedJob = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(jobApplications.pending, (state, action) => {
      state.value.application.all = false;
      state.value.application.archived = false;
      state.value.application.shortListed = false;
    });
    builder.addCase(jobApplications.fulfilled, (state, action) => {
      const all = action.payload.data.filter(
        (item) => item.archived == false && item.shortListed == false
      );
      const shortlisted = action.payload.data.filter(
        (item) => item.shortListed == true && item.archived == false
      );

      const archived = action.payload.data.filter(
        (item) => item.archived == true && item.shortListed == false
      );
      state.value.application.all = all;
      state.value.application.shortListed = shortlisted;
      state.value.application.archived = archived;
    });
  },
});
export const { setArchived, setAll,setShortList, setSelectedCandidate, setSelectedJob } =
  jobApplicantList.actions;
export default jobApplicantList.reducer;
