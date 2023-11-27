import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userId:"65648969bf669b581fb88bbd"
  },
};

const authentication = createSlice({
  name: "authentication",
  initialState: initialState,
  reducers: {
    setAuthentication: (state, action) => {
        console.log("state", state)
      state.value = action.payload;
    },
  },
});
export const { setAuthentication } = authentication.actions;
export default authentication.reducer;
