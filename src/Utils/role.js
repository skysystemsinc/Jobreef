let role = null;

const roles = {
  employee: "employee",
  company: "company",
  candidate:'candidate'
};
if (typeof window != "undefined") {
    localStorage.setItem("role", roles.company);

  const localRole = localStorage.getItem("role");
  if (localRole) {
    role = localRole;
  }
}

export { role , roles };
