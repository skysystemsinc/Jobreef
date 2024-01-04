import { abuseReport } from "@/schema/stateSchema";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { ...abuseReport },
};

const abuseReports = createSlice({
  name: "abuseReports",
  initialState: initialState,
  reducers: {
    addAbuseReport: (state, action) => {
      console.log("action.payload", action.payload);
      state.value = action.payload;
    },
  },
});
export const { addAbuseReport } = abuseReports.actions;
export default abuseReports.reducer;
