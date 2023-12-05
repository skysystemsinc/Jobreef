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
  certification: [],
  id: "656edc22abdf31d7cc472968",
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
  currentlyEnrolled:false,
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
  noExpiry:false,
  validUntil: null,
  certificateMedia:[]
};
export { certification, registration, company,education, employee, workExperience };
