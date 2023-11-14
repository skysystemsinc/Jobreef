import mongoose from "mongoose";

const Users = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    role: {
      type: String,
    },
    accountType: {
      type: String,
    },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Users", Users);
// let userModel = mongoose.model("Users", Users);
// export default userModel;
export default mongoose.models.Users || mongoose.model("Users", Users);
