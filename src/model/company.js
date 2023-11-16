import mongoose from "mongoose";
import BaseEntity from "./baseEntity";

const Company = new mongoose.Schema({
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
  companyName: {
    type: String,
  },
  industry: {
    type: String,
  },
  directory: {
    type: String,
  },
  noOfEmployees: {
    type: Number,
  },
  yearEstablished: {
    type: Number,
  },
  description: {
    type: String,
  },
  webUrl: {
    type: String,
  },
  companyLogo: {
    type: String,
  },
  socialLinks: [
    {
      platform: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  ],
});


// let companyModel = mongoose.model("Company", Company);
// export default companyModel;
export default mongoose.models.Company || mongoose.model("Company", Company);