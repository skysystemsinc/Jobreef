import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const loginUser = createSlice({
  name: "loginUser",
  initialState: initialState,

  reducers: {
    setLoginUser: (state, action) => {
      const transformedPreferences = {};
      console.log("action.payload.preferences",action.payload);
      let  preferences =action.payload.emailPreferences
      for (const key in preferences) {
        transformedPreferences[key] = {
          label: preferences[key] ? "Yes" : "No",
          value: preferences[key],
        };
      }
      action.payload.emailPreferences = transformedPreferences;
      state.value = action.payload;
    },
  },
});
export const { setLoginUser } = loginUser.actions;
export default loginUser.reducer;
