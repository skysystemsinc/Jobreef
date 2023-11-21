
import { employee } from "@/schema/stateSchema";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: employee,
};

const employeeRegister = createSlice({
  name: "employeeRegister",
  initialState: initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addEmployee } = employeeRegister.actions;
export default employeeRegister.reducer;

