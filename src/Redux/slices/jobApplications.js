import endPoints from "@/Utils/endpoints";
import { get } from "@/helper/fetch";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   value: job,

  value: {
    application: {
      all: false,
      archived: false,
    },
    candidate: false,
    saved: false,
    // matchCandidate: false,
    // search: false,
  },
};
export const jobApplications = createAsyncThunk(
  "jobApplications",
  async (id) => {
    try {
      const postData = await get(`${endPoints.applications}/${id}`, "GET");
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
    setSelectedCandidate: (state, action) => {
      state.value.candidate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(jobApplications.pending, (state, action) => {
      state.value.application.all = false;
      state.value.application.archived = false;
    });
    builder.addCase(jobApplications.fulfilled, (state, action) => {
      const all = action.payload.data.filter((item) => item.archived == false);
      const saved = action.payload.data.filter((item) => item.saved == true);
      console.log("saved",saved);
      const archived = action.payload.data.filter(
        (item) => item.archived == true
      );
      state.value.application.all = all;
      state.value.saved = saved;
      state.value.application.archived = archived;
    });
  },
});
export const { setArchived, setAll, setSelectedCandidate } =
  jobApplicantList.actions;
export default jobApplicantList.reducer;
