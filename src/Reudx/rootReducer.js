import { combineReducers } from "@reduxjs/toolkit";
import userProfileSlice from "./slices/userProfileSlice";
import companyProfile from "./slices/companyProfile";
import teamMembers from "./slices/teamMembers";
import candidates from "./slices/candidates";

const rootReducer = combineReducers({
  userProfileSlice,
  companyProfile,
  teamMembers,
  candidates
});
export default rootReducer;
