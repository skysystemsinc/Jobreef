import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const userRegistration = createSlice({
  name: "userRegistration",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
        console.log("state", state)
      state.value = action.payload;
    },
  },
});
export const { setAuthentication } = userRegistration.actions;
export default userRegistration.reducer;
