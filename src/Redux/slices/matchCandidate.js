import endPoints from "@/Utils/endpoints";
import { get } from "@/helper/fetch";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    matchCandidate: {
      all: false,
      notInterested: false,
    },
    search: false,
  },
};
export const matchCandidate = createAsyncThunk("matchCandidate", async (id) => {
  try {
    const postData = await get(`${endPoints.matchCandidate}/${id}`, "GET");
    return postData;
  } catch (error) {
    console.log("error", error);
  }
  return error;
});
const matchCandidateList = createSlice({
  name: "matchCandidateList",
  initialState: initialState,
  reducers: {
    setNotInterested: (state, action) => {
      state.value.matchCandidate.notInterested = action.payload;
    },
    setAll: (state, action) => {
      state.value.matchCandidate.all = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(matchCandidate.pending, (state, action) => {
      state.value.matchCandidate.all = false;
      state.value.matchCandidate.notInterested = false;
    });
    builder.addCase(matchCandidate.fulfilled, (state, action) => {
      const all = action.payload.data.filter((item) => item.interested == true);
      const notInterested = action.payload.data.filter(
        (item) => item.interested == false
      );
      state.value.matchCandidate.all = all;
      state.value.matchCandidate.notInterested = notInterested;
    });
  },
});
export const { setNotInterested, setAll } = matchCandidateList.actions;
export default matchCandidateList.reducer;
