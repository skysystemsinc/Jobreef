import { registration } from "@/schema/stateSchema";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: registration,
};

const userRegistration = createSlice({
  name: "userRegistration",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addUser } = userRegistration.actions;
export default userRegistration.reducer;
