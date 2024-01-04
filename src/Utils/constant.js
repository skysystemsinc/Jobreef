let role = null;

const roles = {
  recruiter: "recruiter",
  owner: "owner",
  company: "company",
  candidate: "candidate",
};
const accountType = {
  employer: "employer",
  candidate: "candidate",
};
const status = {
  expire: "expire",
  pause: "pause",
  active: "active",
  draft: "draft",
};

const sortBy = {
  dateApplied: "dateApplied",
  relevance: "relevance",
};

export { role, roles, accountType, status ,sortBy };
