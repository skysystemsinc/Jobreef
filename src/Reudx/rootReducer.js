import { combineReducers } from "@reduxjs/toolkit";
import userProfileSlice from "./slices/userProfileSlice";
import companyProfile from "./slices/companyProfile";
import teamMembers from "./slices/teamMembers";
import candidates from "./slices/candidates";
import chat from "./slices/chat";
import authentication from "./slices/authentication";

const rootReducer = combineReducers({
  userProfileSlice,
  companyProfile,
  teamMembers,
  candidates,
  chat,
  authentication
});
export default rootReducer;
