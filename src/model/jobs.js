import mongoose from "mongoose";
import BaseEntity from "./baseEntity";

const jobs = new mongoose.Schema({
  ...BaseEntity,
  country: {
    type: String,
  },
  province: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  title: {
    type: String,
  },
  employeeType: {
    type: String,
  },
  applicationDeadline: {
    type: String,
  },
  locationType: {
    type: Number,
  },
  ApplicationType: {
    type: String ,
  },
  externalUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  noOfOpening: {
    type: String,
  },
  education: {
    type: String,
  },
  experience: {
    type: String,
  },
  jobFamily: {
    type: String,
  },
  minSalary: {
    type: String,
  },
  maxSalary: {
    type: String,
  },
  rate: {
    type: String,
  },
  tags: {
    type: String,
  },
  skills: {
    type: [String],
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
});

 
export default mongoose.models.jobs || mongoose.model("jobs", jobs);
