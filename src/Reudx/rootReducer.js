import { combineReducers } from "@reduxjs/toolkit";
import userProfileSlice from "./slices/userProfileSlice";
import companyProfile from "./slices/companyProfile";
import teamMembers from "./slices/teamMembers";
import candidates from "./slices/candidates";
import chat from "./slices/chat";

const rootReducer = combineReducers({
  userProfileSlice,
  companyProfile,
  teamMembers,
  candidates,
  chat
});
export default rootReducer;
