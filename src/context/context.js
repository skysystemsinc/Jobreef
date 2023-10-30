import { createContext, useEffect, useState } from "react";

export const Role_context = createContext(null);
function Context({ children }) {

  const [company, setCompany] = useState(true);
  const [searchEntryLocation,setSearchEntryLocation] = useState('');
  const [searchEntryCompany,setSearchEntryCompany] = useState('');

  useEffect(() => {
    const role = localStorage.getItem("company");
    
    if (role) {
      setCompany(role);
    }
  }, []);

  return (
    <Role_context.Provider value={{ company, setCompany,
     searchEntryLocation, searchEntryCompany,setSearchEntryLocation, setSearchEntryCompany }}>
      {children}
    </Role_context.Provider>
  );
}
export default Context;

