import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userId:"656d8d7b40d67dba77b37e40"
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
