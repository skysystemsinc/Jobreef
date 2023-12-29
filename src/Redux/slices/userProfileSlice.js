import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:{},
};

const userProfile = createSlice({
  name: "userProfile",
  initialState: initialState,
  reducers: {
    getUserProfile: (state, action) => {
      
      state.value =action.payload;
    },
  },
});
export const { getUserProfile } = userProfile.actions;
export default userProfile.reducer;
