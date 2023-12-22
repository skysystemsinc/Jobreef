import { combineReducers } from "@reduxjs/toolkit";
import userProfileSlice from "./slices/userProfileSlice";
import companyProfile from "./slices/companyProfile";
import teamMembers from "./slices/teamMembers";
import candidates from "./slices/candidates";
import chat from "./slices/chat";
import authentication from "./slices/authentication";
import userRegistration from "./slices/userRegistration";
import companyRegister from "./slices/company";
import employeeRegister from "./slices/employee";
import LoginUser from "./slices/LoginUser";
import jobPost from "./slices/jobPost";
import  jobApplicantList from "./slices/jobApplications"
import  matchCandidateList from "./slices/matchCandidate"


const rootReducer = combineReducers({
  userProfileSlice,
  companyProfile,
  teamMembers,
  candidates,
  chat,
  authentication,
  userRegistration,
  companyRegister,
  employeeRegister,
  LoginUser,
  jobPost,
  jobApplicantList:jobApplicantList ,
                                 
  matchCandidateList:matchCandidateList                               

});
export default rootReducer;
