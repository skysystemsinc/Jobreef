import { employee } from "@/schema/stateSchema";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    employee,
    formData: false,
  },
};

const employeeRegister = createSlice({
  name: "employeeRegister",
  initialState: initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.value.employee = action.payload;
    },
    setExperienceForm: (state, action) => {
      state.value.formData = action.payload;
    },
  },
});
export const { addEmployee, setExperienceForm } = employeeRegister.actions;

export default employeeRegister.reducer;
