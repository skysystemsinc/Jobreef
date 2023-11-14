import mongoose from "mongoose";

const Employee = new mongoose.Schema(
  {
    country: {
      type: String,
    },
    province: {
      type: String,
    },
    city: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    summary: {
      type: String,
    },
    workExperience: {
      type: [{}],
    },
    attachment: {
      type: [{}],
    },
    achievement : {
      type: [{}],
    },
    education: [
      {
        name: {
          type: String,
        },

        diploma: {
          type: String,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
        issuedOn: {
          type: String,
        },
        country: {
          type: String,
        },
        province: {
          type: String,
        },
        address: {
          type: String,
        },
        city: {
          type: String,
        },
      },
    ],

    certification: [
      {
        name: {
          type: String,
        },

        organization: {
          type: String,
        },
        certificateId: {
          type: String,
        },
        issuedOn: {
          type: String,
        },
        validUntil: {
          type: String,
        },
        expiry: {
          type: Boolean,
        },
      },
    ],

    skills: [
      {
        name: {
          type: String,
        },
        level: {
          type: String,
        },
      },
    ],
  },

  { timestamps: true }
);

export default mongoose.models.Employee || mongoose.model("Employee", Employee);
