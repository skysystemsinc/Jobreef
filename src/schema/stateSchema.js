const registration = {
  firstName: "",
  lastName: "",
  email: "",
  isCompany: true,
  password: "",
  confirmPassword: "",
  otp: "",
  userId: null,
};
let company = {
  companyName: "",
  industry: "",
  directory: "",
  noOfEmployees: "",
  yearEstablished: "",
  webUrl: "",
  telePhone: "",
  description: "",
  country: "",
  province: "",
  city: "",
  address: "",
  loading: false,
  platform: "",
  link: "",
  logo: false,
  socialLinks: [
    {
      platform: "",
      link: "",
    },
  ],
};
const employee = {
  country: "",
  state: "",
  province: "",
  city: "",
  number: "",
  description: "",
  workExperience: [],
  education: [],
  attachments: {
    resume: [],
    additional: [],
  },

  certification: [],
  skills: [{ name: "", level: "" }],
  // id: "657051ad6e4857167f3870de",
  id: null,
};
const workExperience = {
  country: "",
  province: "",
  city: "",
  address: "",
  companyName: "",
  designation: "",
  startDate: null,
  endDate: null,
  currentlyWorking: false,
  employeeType: "",
  jobFamily: "",
  jobSummary: "",
};
const education = {
  schoolName: "",
  diploma: "",
  currentlyEnrolled: false,
  startDate: null,
  endDate: null,
  country: "",
  province: "",
  city: "",
  address: "",
  gpa: "",
  description: "",
};
const certification = {
  certificateName: "",
  organizationName: "",
  certificateId: "",
  issuedOn: null,
  noExpiry: false,
  validUntil: null,
  certificateMedia: [],
};
const skills = [{ name: "", level: "" }];
export {
  skills,
  certification,
  registration,
  company,
  education,
  employee,
  workExperience,
};
