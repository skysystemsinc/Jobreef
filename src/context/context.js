import { createContext, useEffect, useState } from "react";

export const Role_context = createContext(null);
function Context({ children }) {

  const [company, setCompany] = useState(true);
  const [searchEntryLocation,setSearchEntryLocation] = useState('');
  const [searchEntryCompany,setSearchEntryCompany] = useState('');
  const [tempSearchEntryLocation,setTempSearchEntryLocation] = useState('');
  const [tempSearchEntryCompany,setTempSearchEntryCompany] = useState('');
  const [toggle,setToggle] = useState(true);
  const [templogin, setTemplogin] = useState(false);


  const setHandleLocationEntry = (e) => {
    setTempSearchEntryLocation(e)
  };

  const getHandleLocationEntry = () => {
    return searchEntryLocation
  };

  const setHandleCompanyEntry = (e) => {
    setTempSearchEntryCompany(e)
    
  };

  const getHandleCompanyEntry = () => {
    return searchEntryCompany
  };

  const searchNow = () => {
    // setToggle(true) 
    
    setSearchEntryLocation(tempSearchEntryLocation.trim())
    setSearchEntryCompany(tempSearchEntryCompany.trim())
    setToggle(false);
  } 


  const getToggle = ()=>{
    return toggle;
  }

  useEffect(() => {
    const role = localStorage.getItem("company");
    
    if (role) {
      setCompany(role);
    }
  }, []);

  return (
    <Role_context.Provider value={{ company, setCompany,
      searchEntryLocation,
      searchEntryCompany,
      templogin,
      setTemplogin,
      getToggle,
      searchNow,
      setHandleCompanyEntry,
      getHandleCompanyEntry,
      setHandleLocationEntry,
      getHandleLocationEntry, }}>
      {children}
    </Role_context.Provider>
  );
}
export default Context;