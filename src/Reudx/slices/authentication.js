import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userId:"655d81ef1748a0dd710ce82b"
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
