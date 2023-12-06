import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userId:"65706b96e7025e8a32da778c"
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
