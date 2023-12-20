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
  id: "",
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
  // telePhone:"",
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
  workExperience: false,
  education: false,
  attachments: {
    resume: [],
    additional: [],
  },
  achievement: false,
  certification: false,
  skills: false,
  // id: "657c281299882859c18f6672",
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
const achievement = {
  name: "",
  issueOrganization: "",
  issuedOn: "",
  media: [],
};
const job = {
  title: "",
  employmentType: "",
  applicationDeadline: null,
  locationType: "",
  jobDescription: "",
  opening: "",
  minimumEducation: "",
  yearsOfExperience: "",
  jobFamily: "",
  minimumSalary: "",
  maximumSalary: "",
  country: "",
  state: "",
  seniorityLevel: "",
  city: "",
  address: "",
  desiredSkills: "",
  province: "",
  tags: [],
  externalURL: "",
  applicationType: "",
  rate: "",
  screeningQuestions: [
    {
      question: "",
      type: "",
      rightAns: "",
      options: [{ name: "" }, { name: "" }, { name: "" }],
    },
  ],
};
const industryOptions = [
  {
    label: "Agriculture, Forestry, Fishing and Hunting",
    value: "Agriculture, Forestry, Fishing and Hunting",
  },
  {
    label: "Mining and Energy",
    value: "Mining and Energy",
  },
  {
    label: "Utilities",
    value: "Utilities",
  },
  {
    label: "Construction",
    value: "Construction",
  },
  {
    label: "Manufacturing",
    value: "Manufacturing",
  },
  {
    label: "Wholesale and Retail",
    value: "Wholesale and Retail",
  },
  {
    label: "Transport and Storage",
    value: "Transport and Storage",
  },
  {
    label: "Information, News, and Media",
    value: "Information, News, and Media",
  },
  {
    label: "Finance and Insurance",
    value: "Finance and Insurance",
  },
  {
    label: "Real Estate and Rental and Leasing",
    value: "Real Estate and Rental and Leasing",
  },
  {
    label: "Professional, Scientific, and    Technology Services",
    value: "Professional, Scientific, and    Technology Services",
  },
  {
    label: "Education Services",
    value: "Education Services",
  },
  {
    label: "Healthcare",
    value: "Healthcare",
  },
  {
    label: "Arts, Entertainment, and Recreation",
    value: "Arts, Entertainment, and Recreation",
  },
  {
    label: "Hotels and Restaurants Services",
    value: "Hotels and Restaurants Services",
  },
  {
    label: "Government and Public Administration",
    value: "Government and Public Administration",
  },
  {
    label: "Other",
    value: "Other",
  },
];
const directory = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  },
];
const EmploymentTypeOpt = [
  {
    label: "Full-Time",
    value: "Full-Time",
  },
  {
    label: "Part-Time",
    value: "Part-Time",
  },
  {
    label: "Contract",
    value: "Contract",
  },
  {
    label: "Per Diem",
    value: "Per Diem",
  },
  {
    label: "Temporary",
    value: "Temporary",
  },
  {
    label: "Internship",
    value: "Internship",
  },
];
const jobFamilyOpt = [
  {
    label: "Architecture and Engineering",
    value: "Architecture and Engineering",
  },
  {
    label: "Arts, Design, Entertainment, Sports, and Media",
    value: "Arts, Design, Entertainment, Sports, and Media",
  },
  {
    label: "Business Operations",
    value: "Business Operations",
  },
  {
    label: "Cleaning and Maintenance",
    value: "Cleaning and Maintenance",
  },
  {
    label: "Community and Social Service",
    value: "Community and Social Service",
  },
  {
    label: "Information Technology",
    value: "Information Technology",
  },
  {
    label: "Construction and Extraction ",
    value: " Construction and Extraction ",
  },
  {
    label: "Education ",
    value: " Education ",
  },
  {
    label: "Farming, Fishing, and Forestry ",
    value: "  Farming, Fishing, and Forestry",
  },
  {
    label: "Finance and Accounting ",
    value: "  Finance and Accounting",
  },
  {
    label: "Food Preparation and Service ",
    value: "  Food Preparation and Service",
  },
  {
    label: "Healthcare and Medicine ",
    value: "  Healthcare and Medicine",
  },
  {
    label: "Human Resources ",
    value: "  Human Resources",
  },
  {
    label: "Installation, Maintenance, and Repair ",
    value: "Installation, Maintenance, and Repair  ",
  },
  {
    label: "Legal ",
    value: "Legal  ",
  },
  {
    label: "Life, Physical, and Social  Science",
    value: "  Life, Physical, and Social  Science",
  },
  {
    label: "Management",
    value: "  Management",
  },
  {
    label: "Military",
    value: "  Military",
  },
  {
    label: "Office and Administrative Support",
    value: "Office and Administrative Support",
  },
  {
    label: "Personal Care and Service",
    value: "Personal Care and Service",
  },
  {
    label: "Production and Manufacturing",
    value: "Production and Manufacturing",
  },
  {
    label: "Protective Service",
    value: "Protective Service",
  },
  {
    label: "Sales and Marketing",
    value: "Sales and Marketing",
  },
  {
    label: "Transport and Storage",
    value: "Transport and Storage",
  },
  {
    label: "Other",
    value: "Other",
  },
];
const skills = [{ name: "", level: "" }];
export {
  industryOptions,
  skills,
  EmploymentTypeOpt,
  directory,
  certification,
  registration,
  company,
  achievement,
  job,
  education,
  employee,
  workExperience,
};
