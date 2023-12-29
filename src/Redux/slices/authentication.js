import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userId:"658e9db3e8d594e87bbc4536"
    // userId:false
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
