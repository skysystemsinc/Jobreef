import endPoints from "@/Utils/endpoints";
import { get } from "@/helper/fetch";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   value: job,

  value: {
    application: false,
    matchCandidate: false,
    search: false,
  },
};

const jobApplicants = createSlice({
  name: "jobApplicants",
  initialState: initialState,
  reducers: {
    setJobApplicants:  (state, action) => {
        console.log("state",state.value);
    //   const data = action.payload;
    //   console.log("data",data);
    //   try {
    //     const postData = await get(`${endPoints.jobs}/${data.id}`, "GET");
    //     if (postData.success) {
    //       const { data } = postData;
    //       console.log("data",data);
    //       state.value.application = data;
    //     }
    //   } catch (error) {
    //     console.log("error", error);
    //   }
    },
  },
});
export const { setJobApplicants } = jobApplicants.actions;
export default jobApplicants.reducer;
