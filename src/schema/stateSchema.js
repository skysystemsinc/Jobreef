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
  id: null,
};
const workExperience = {
  country: "",
  state: "",
  city: "",
  streetAddress: "",
  companyName: "",
  designation: "",
  startDate: null,
  endDate: null,
  currentlyWorking: false,
  employeeType: "",
  jobFamily: "",
  jobSummary: "",
};
export { registration, company, employee ,workExperience};
