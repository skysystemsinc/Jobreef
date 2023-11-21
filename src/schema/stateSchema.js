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
  webLink: "",
  description: "",
  country: "",
  province: "",
  city: "",
  address: "",
  loading: false,
  platform: "",
  link: "",
  logo: false,
  links: [
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

  workExperience:[],
  id:null
};
export { registration, company ,employee};
