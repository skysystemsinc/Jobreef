import { createContext, useEffect, useState } from "react";

export const Role_context = createContext(null);
function Context({ children }) {
  const [company, setCompany] = useState(true);

  // useEffect(() => {
  //   const role = localStorage.getItem("company");
    
  //   if (role) {
  //     setCompany(role);
  //   }
  // }, []);

  return (
    <Role_context.Provider value={{ company, setCompany }}>
      {children}
    </Role_context.Provider>
  );
}
export default Context;
