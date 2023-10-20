import { combineReducers } from "@reduxjs/toolkit";
import userProfileSlice from "./slices/userProfileSlice";
import companyProfile from "./slices/companyProfile";
import teamMembers from "./slices/teamMembers";

const rootReducer = combineReducers({
  userProfileSlice,
  companyProfile,
  teamMembers
});
export default rootReducer;
