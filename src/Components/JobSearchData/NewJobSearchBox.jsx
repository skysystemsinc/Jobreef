import React,{useState} from "react";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../../Components/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import ShowEmptyResult from "./ShowEmptyResult";
import bookmark from "../../assets/Images/bookmark.svg";
import {
    Box,
    Heading,
    Image,
    Link ,
  } from "@chakra-ui/react";


const NewJobSearchBox = ({selectedValues,settoggle,setTempObject,Data }) => {
  const [clickedStates, setClickedStates] = useState(Array(Data.length).fill(false));
  const [load,setLoad] = useState();
  const [results,setResults] = useState(0);

  const handleBoxClick = (index) => {
    const updatedClickedStates = [...clickedStates];
    updatedClickedStates.fill(false);
    updatedClickedStates[index] = true;
    setClickedStates(updatedClickedStates);
  };
  const [imageSources, setImageSources] = useState(Array(Data.length).fill(EmptyVector));

  const handleImageClick = (index) => {
    const newImageSources = [...imageSources];
    newImageSources[index] = newImageSources[index] === bookmark ? EmptyVector : bookmark;
    setImageSources(newImageSources);
  }; 

  // console.log(Data)

    return(
      <>
      
    {Data.map((object,index) => {
    return(
    <Box
            key={index}
            p={{ sm: "20px", base: "12px" }}
            width={"100%"}
            borderRadius={"8px"}
            bg={"white.100"}
            border={"1px solid"}
            mb={10}
            borderWidth={1}
            borderColor="gray.400"
            onClick={()=>{
              handleBoxClick(index)
              settoggle(false);
              setTempObject(object)
              setLoad(index)
              // Storing data in local storage
              localStorage.setItem('myData', index);
            }}
            style={{
              transition: localStorage.getItem('myData') == index ? "all 0.4s ease" : "",
              cursor: localStorage.getItem('myData') == index ? "pointer" : "",
              boxShadow: localStorage.getItem('myData') == index
                ? "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
                : "",
              border: localStorage.getItem('myData') == index ? '1px solid #2CA5C3' : "",
              transform: localStorage.getItem('myData') == index ? "scale(1.01)" : "",
            }}
            _hover={{
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
              border: '1px solid #2CA5C3',
              transition: "all 0.4s ease",
              transform: "scale(1.01)",
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
                    <Link href="/candidate/company-page" >
                        <Heading
                          variant={"p4"}
                          color={"gray.text"}
                          marginRight={1}
                        >
                          {object.name}
                        </Heading>
                      </Link>
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
                  // width={"10px"}
                  src={imageSources[index].src}
                  mt={1.5}
                  marginRight={2}
                  onClick={
                    () => handleImageClick(index)
                  }
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
                    >
                      <Heading color={"gray.text"} variant={"p4"}>
                        {object.Salary}/{object.SalaryRate}
                      </Heading>
                      {/* <Box fontSize={{ sm: "14px", base: "8px" }}>
                        <GoDotFill style={{ color: "#D9D9D9" }} />
                      </Box>
                      <Heading color={"gray.text"} variant={"p4"}>
                        
                      </Heading> */}
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
                        {object.JobModel}
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
      {Data.length === 0 ?  (<ShowEmptyResult/>) : null}
        </>
    )
  }
      


export default NewJobSearchBox