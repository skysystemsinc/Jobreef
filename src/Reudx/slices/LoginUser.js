import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const loginUser = createSlice({
  name: "loginUser",
  initialState: initialState,
  reducers: {
    setLoginUser: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setLoginUser } = loginUser.actions;
export default loginUser.reducer;
