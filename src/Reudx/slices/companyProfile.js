import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const companyProfile = createSlice({
  name: "companyProfile",
  initialState: initialState,
  reducers: {
    getCompanyProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getCompanyProfile } = companyProfile.actions;
export default companyProfile.reducer;
