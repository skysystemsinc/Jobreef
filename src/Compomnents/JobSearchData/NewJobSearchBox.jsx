import React,{useContext,useEffect,useState} from "react";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import { DataArray } from './tempSchema.js';
import ShowEmptyResult from "./ShowEmptyResult";
import { Role_context } from "../../context/context";
import { parse, compareAsc, compareDesc } from 'date-fns';
import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Label,
    Image,
    Select,
    useBreakpointValue,
  } from "@chakra-ui/react";

  var Data = DataArray;
  const originalData = [...DataArray];

const NewJobSearchBox = ({selectedValues,toggle,settoggle,setTempObject }) => {
  
  const [dataToDisplay, setDataToDisplay] = useState([]);

  useEffect(()=>{
    setTimeout(()=>{
      if (selectedValues.includes("Date Posted"))
      { 
        Data.sort((a, b) => {
          const dateA = parse(a.ApplicationDeadline, 'MM/dd/yyyy', new Date());
          const dateB = parse(b.ApplicationDeadline, 'MM/dd/yyyy', new Date()); 
          // return compareAsc(dateA, dateB);
          return compareDesc(dateA, dateB);
        });  
        setDataToDisplay(Data)
      }
      else
      {
          Data = [...originalData]
          setDataToDisplay(Data)
          console.log(Data) 
      }
    },1000)
    
  },[selectedValues])

  const {
      company,
      setCompany,
      searchEntryLocation,
      searchEntryCompany,
      searchNow,
      setHandleCompanyEntry, 
      getHandleCompanyEntry,
      setHandleLocationEntry,
      getHandleLocationEntry,
  } = useContext(Role_context); 

    var length = 0;
    return(
      <>
    {dataToDisplay.map((object,index) => {  
    //Search by Company Name
    const foundCompanyName = searchEntryCompany === '' ? true : object.name.toLowerCase().includes(searchEntryCompany.toLowerCase())
    //Search by Location
    const foundLocationName = searchEntryLocation === '' ? true : object.location.toLowerCase().includes(searchEntryLocation.toLowerCase());

    const foundJobModel = selectedValues.includes(object.JobModel)
    const foundEmploymentType = selectedValues.length === 0 || selectedValues.includes(object.EmploymentType);
    const foundExpType = selectedValues.some((Experience) => {
      const match = Experience.match(/(\d+) - (\d+) Years/);
      if (match) {
        const startYear = parseInt(match[1], 10);
        const endYear = parseInt(match[2], 10);
        return startYear <= object.Experience && object.Experience < endYear;
      }
    });
    
    //need to do work from here 
    const foundSalType = selectedValues.some((selectedValue) => {
      const salary = object.Salary;
      const numericSalary = parseFloat(salary.replace(/[^0-9.]+/g, ''));
    
      if (selectedValue === "Fixed Salary") {
        return true;
      }
      if (selectedValue === "$50000 - $70000 Annual") {
        const minValue = 50000;
        const maxValue = 70000;
        return numericSalary >= minValue && numericSalary <= maxValue;
      }
      if (selectedValue === "$70000 - $100,000 Annual") {
        const minValue = 70000;
        const maxValue = 100000;
        return numericSalary >= minValue && numericSalary <= maxValue;
      }
      if (selectedValue === "$100,000 + Annual") {
        const minValue = 100000;
        return numericSalary >= minValue;
      }
    
      return false;
    });
    
    
    if(selectedValues.includes("Date Posted") || foundEmploymentType || foundExpType || foundSalType || foundJobModel  )
    {
        length+=1
    }
    else 
        return null

    if(foundCompanyName)
    {
    }
    else return null
    if(foundLocationName)
    {
    }
    else return null
    
    return(
    <Box
            p={{ sm: "20px", base: "12px" }}
            width={"100%"}
            borderRadius={"8px"}
            bg={"white.100"}
            border={"1px solid"}
            mb={10}
            borderWidth={1}
            borderColor="gray.400"
            onClick={()=>{
              settoggle(false);
              setTempObject(object)
            }}
            style={{transition: "all 0.4s ease"}}
            _hover={{
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
              border: '1px solid #2CA5C3',
              transition: "all 0.4s ease",
              transform: "scale(1.01)"
            }}
          >
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              borderBottom={"1px solid "}
              flexWrap={{ xl: "nowrap", base: "wrap" }}
              borderColor={"gray.400"}
              pb={{ lg: "20px", base: "10px" }}
            >
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                gap={{ md: "18px", base: "12px" }}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Box
                  display={"flex"}
                  mt={"0px"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                >
                  <Image
                    width={{ md: "53px", base: "35px" }}
                    src={microsoft.src}
                    marginRight={2}
                  />
                  <Heading
                    variant={"p7"}
                    fontWeight={700}
                    color={"gray.text"}
                  >
                    {object.title}
                    <Box display={"flex"} alignItems={"center"}>
                      <Heading
                        variant={"p4"}
                        color={"gray.text"}
                        marginRight={1}
                      >
                        {object.name}
                      </Heading>
                      <Box
                        ml={1}
                        mt={"4px"}
                        display="flex"
                        alignItems="center"
                      >
                        <ComponentMyChip label={object.tags} />
                      </Box>
                    </Box>
                  </Heading>
                </Box>
                <Image
                  width={"10px"}
                  src={EmptyVector.src}
                  mt={1.5}
                  marginRight={2}
                />
              </Box>
            </Box>
            <Box>
              <Box
                display={"flex"}
                gap={"40px"}
                mt={"12px"}
                alignItems={"center"}
              >
                <Box width={"100%"}>
                  <Heading variant={"p10"}>{object.location}</Heading>
                  <Box
                    mt={"10px"}
                    display={"flex"}
                    gap={"10px"}
                    justifyContent={"space-between"}
                    width={"100%"}
                  >
                    <Box
                      display={"flex"}
                      flexWrap={"wrap"}
                      gap={"10px"}
                      alignItems={"center"}
                      // backgroundColor={"green"}
                    >
                      <Heading color={"gray.text"} variant={"p4"}>
                        {object.Salary}
                      </Heading>
                      <Box fontSize={{ sm: "14px", base: "8px" }}>
                        <GoDotFill style={{ color: "#D9D9D9" }} />
                      </Box>
                      <Heading color={"gray.text"} variant={"p4"}>
                        {object.EmploymentType}
                      </Heading>
                      <Box fontSize={{ sm: "14px", base: "8px" }} whiteSpace="nowrap">
                        <GoDotFill style={{ color: "#D9D9D9" }} />
                      </Box>
                      <Heading color={"gray.text"} variant={"p4"}>
                        Experience: {object.Experience} years
                      </Heading>
                    </Box>
                    <Box
                      display={"flex"}
                      flexDirection="column"
                      textAlign={"end"}
                      justifyContent="flex-end"
                    >
                      <Heading color={"gray.text"} variant={"p4"}>
                        Application Deadline: {object.ApplicationDeadline}
                      </Heading>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Heading mt={"22px"} variant={"p10"}>
                  Desired Skills
                </Heading>
              </Box>

              <Box display={"flex"} justifyContent={"space-between"}>
                <Box
                  display={"flex"}
                  mt={"20px"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                >
                  {object.DesiredSkills.map((skill) => {
                    return (
                      <Box key={Math.random()} mr={"20px"} mb={"10px"}>
                        <ComponentMyChip label={skill} />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>)
      })
      }
      {length === 0 ?  <ShowEmptyResult/> : null}
        </>
    )
  }
      


export default NewJobSearchBox