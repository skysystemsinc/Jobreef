let role = null;

const roles = {
  employee: "employee",
  company: "company",
};
if (typeof window != "undefined") {
    localStorage.setItem("role", roles.company);

  const localRole = localStorage.getItem("role");
  if (localRole) {
    role = localRole;
  }
}

export { role , roles };
