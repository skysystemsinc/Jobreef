import { company } from "@/schema/stateSchema";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: company,
};

const companyRegister = createSlice({
  name: "companyRegister",
  initialState: initialState,
  reducers: {
    addCompany: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addCompany } = companyRegister.actions;
export default companyRegister.reducer;
