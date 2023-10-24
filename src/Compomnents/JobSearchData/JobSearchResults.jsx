import React from "react";
import { GoDotFill } from "react-icons/go";
import { FiSearch, FiMapPin } from "react-icons/fi";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import Group from "@/assets/Images/Group.svg";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import cross from "../../assets/Images/cross.svg";

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

const checkboxes = [
  {
    heading: "Sort Jobs By",
    values: [
      { key: "Date Posted", value: "DatePosted" },
      { key: "Relevance", value: "Relevance" },
    ],
  },
  {
    heading: "Job Model",
    values: [
      { key: "Hybrid", value: "Hybrid" },
      { key: "Remote", value: "Remote" },
      { key: "On-Site", value: "Onsite" },
    ],
  },
  {
    heading: "Employment Type",
    values: [
      { key: "Full-Time", value: "Full-Time" },
      { key: "Part-Time", value: "Part-Time" },
      { key: "Contract", value: "Contract" },
      { key: "Internship", value: "Internship" },
    ],
  },
  {
    heading: "Experience",
    values: [
      { key: "EntryLevel", value: "Entry-Level" },
      { key: "1 - 3 Years", value: 1 },
      { key: "3 - 5 Years", value: 3 },
      { key: "5 - 10 Years", value: 5 },
      { key: "10+ Years", value: 10 },
    ],
  },
  {
    heading: "Salary Type",
    values: [
      { key: "Fixed Salary", value: "Fixed Salary" },
      { key: "$50000 - $70000 Annual", value: 50000 },
      { key: "$70000 - $100,000 Annual", value: 70000 },
      { key: "$100,000 + Annual", value: 100000 },
    ],
  },
];

const DataArray = [
  {
    imageurl: "",
    title: "Senior System's Design Engineer",
    name: "Microsoft",
    tags: "Urgently Hiring",
    location: "Redmond, Washington State",
    Salary: "150,000$",
    EmploymentType: "Full-Time",
    Experience: "3",
    ApplicationDeadline: "07/31/2023",
    DesiredSkills: [
      "Technical knowledge",
      "System Architecture",
      "Risk Management",
      "Project Management",
      "Quality Focus",
      "Q/A Testing",
      "LeaderShip",
      "Product Design",
    ],
  },
  {
    imageurl: "",
    title: "Senior System's Design Engineer",
    name: "Microsoft",
    tags: "Urgently Hiring",
    location: "Redmond, Washington State",
    Salary: "150,000$",
    EmploymentType: "Full-Time",
    Experience: "3",
    ApplicationDeadline: "07/31/2023",
    DesiredSkills: [
      "Technical knowledge",
      "System Architecture",
      "Risk Management",
      "Project Management",
      "Quality Focus",
      "Q/A Testing",
      "LeaderShip",
      "Product Design",
    ],
  },
];

const PreviousSearches = [
  {
    Search: "Microsoft",
  },
  {
    Search: "Amazon",
  },
  {
    Search: "FaceBook",
  },
  {
    Search: "Google",
  },
];

const tempDataArray = [
  {
    imageurl: "",
    title: "Senior System's Design Engineer",
    name: "Microsoft",
    tags: "Urgently Hiring",
    location: "Redmond, Washington State",
    Salary: "150,000$",
    EmploymentType: "Full-Time",
    Experience: "3",
    ApplicationDeadline: "07/31/2023",
    DesiredSkills: [
      "Technical knowledge",
      "System Architecture",
      "Risk Management",
      "Project Management",
      "Quality Focus",
      "Q/A Testing",
      "LeaderShip",
      "Product Design",
    ],
  },
];

const text = [
  {
    value:
      "System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability.",
  },
  {
    value:
      "System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability.",
  },
  {
    value:
      "System Design and Architecture: Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability.",
  },
];

const text2 = [
  {
    value: "Bachelor's or Master's degree in Engineering or a related field.",
  },
  {
    value: "Bachelor's or Master's degree in Engineering or a related field.",
  },
  {
    value: "Bachelor's or Master's degree in Engineering or a related field.",
  },
];
const JobSearchResults = ({ company, location }) => {
  const pValue = useBreakpointValue({ base: 0, lg: 10 });
  const [selectedValues, setSelectedValues] = useState([]);
  const [companySearch, setCompany] = useState(company);
  const [locationSearch, setLocation] = useState(location);

  //Temporary Button Later on need to be deleted
  const [toggle, settoggle] = useState("false");
  const [toggle2, settoggle2] = useState("false");

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const deleteSelectedOptions = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    }
  };

  return (
    <Box>
      <Box display={"flex"} gap={10}>
        <Button
          onClick={() => {
            toggle ? settoggle(false) : settoggle(true);
          }}
          style={{ padding: "20px 40px 20px 40px" }}
          variant="blue-btn"
          marginLeft="35%" // Add margin to the button for space
          mt={5}
        >
          Toggle
        </Button>
        {toggle ? (
          <Button
            onClick={() => {
              toggle2 ? settoggle2(false) : settoggle2(true);
            }}
            style={{ padding: "20px 40px 20px 40px" }}
            variant="blue-btn"
            mt={5}
          >
            Toggle
          </Button>
        ) : null}
      </Box>

      <Box display={"flex"} flexWrap={"wrap"} margin={10} gap={5}>
        <Box  display={{ lg: "flex", base: "none" }} width="100%" flex={1.25} flexDirection={"column"} flexWrap={"wrap"}>
          <Box width="100%"  display={"flex"} flexDirection={"column"} flexWrap={"wrap"}>
            {checkboxes.map((object, index) => {
              return (
                <Box
                  borderWidth={1}
                  borderColor="gray.100"
                  width="100%"
                  p={4}
                  key={Math.random()}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                >
                  <Heading
                    color={"gray"}
                    fontWeight={"bold"}
                    fontSize={16}
                    variant={"p4"}
                  >
                    {object.heading}
                  </Heading>
                  {object.values &&
                    object.values.map((value) => {
                      return (
                        <Box display={"block"} key={Math.random()}>
                          <input
                            type="checkbox"
                            name=""
                            id={value.key}
                            style={{ marginRight: 10 }}
                            checked={selectedValues.includes(value.key)}
                            onChange={() => handleCheckboxChange(value.key)}
                          />
                          <label htmlFor={value.key} style={{ color: "black" }}>
                            {value.key}
                          </label>
                        </Box>
                      );
                    })}
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box display={{ lg: "none", base: "block" }}>
          <Box width="100%" display={"flex"}>
            {checkboxes.map((object, index) => {
              return (
                <Box
                  borderWidth={1}
                  borderColor="gray.100"
                  width="100%"
                  p={4}
                  key={Math.random()}
                >
                  <Heading
                    color={"gray"}
                    fontWeight={"bold"}
                    fontSize={16}
                    variant={"p4"}
                  >
                    {object.heading}
                  </Heading>
                  <Select
                    color={"gray"}
                    isMulti
                    value={selectedValues}
                    onChange={(event) => {
                      console.log(
                        "Selected Values",
                        event.target.selectedOptions
                      );
                      const selectedOptions = event.target.selectedOptions;
                      const selectedValues = Array.from(selectedOptions).map(
                        (option) => option.value
                      );
                      handleCheckboxChange(selectedValues);
                    }}
                  >
                    {object.values &&
                      object.values.map((value) => (
                        <option key={value.key} value={value.key}>
                          {value.key}
                        </option>
                      ))}
                  </Select>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box flex={3} flexWrap={"wrap"}>
          <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
            {selectedValues.map((val) => {
              return (
                <Box
                  display={"flex"}
                  mr={"20px"}
                  mb={"10px"}
                  key={Math.random()}
                >
                  <ComponentMyChip label={val}>
                    <Image
                      width={{ md: "10px", base: "20px" }}
                      src={cross.src}
                      marginRight={2}
                      onClick={() => deleteSelectedOptions(val)}
                      style={{ margin: "1px 0px 0px 10px" }}
                    />
                  </ComponentMyChip>
                </Box>
              );
            })}
          </Box>
          {toggle2 ? (
            <Box p={pValue}>
              <Heading letterSpacing={-1} color={"gray.text"} variant={"p3"}>
                We didn’t find any job listings that match your search criteria
                and filters
              </Heading>
              <Box>
                <Heading
                  mt={16}
                  mb={5}
                  display={"flex"}
                  color={"gray.text"}
                  variant={"p4"}
                >
                  1.{" "}
                  <Heading color={"gray.text"} variant={"p4"}>
                    Expand Your Search Keywords: Try using different or
                    generalised keywords that might capture a wider range of job
                    listings in your desired field
                  </Heading>
                </Heading>
                <Heading
                  mb={5}
                  display={"flex"}
                  color={"gray.text"}
                  variant={"p4"}
                >
                  2.{" "}
                  <Heading color={"gray.text"} variant={"p4"}>
                    Broaden Your Criteria: To broaden search results, adjust
                    your search filters which may lead in search results
                  </Heading>
                </Heading>
                <Heading
                  mb={5}
                  display={"flex"}
                  color={"gray.text"}
                  variant={"p4"}
                >
                  3.{" "}
                  <Heading color={"gray.text"} variant={"p4"}>
                    Check Spelling and Keywords: Ensure that your search terms
                    are correctly spelled and that you're using relevant
                    keywords to describe the type of job you're looking for
                  </Heading>
                </Heading>
              </Box>
            </Box>
          ) : (
            DataArray.map((object) => {
              //logical Part need to be done

              // const check = () => {
              // return DataArray.some((item) =>
              //     Object.values(item).some((value) => {
              //     if (Array.isArray(value)) {
              //         return value.some((skill) => selectedValues.includes(skill.key));
              //     } else if (typeof value === 'string') {
              //         return selectedValues.includes(value);
              //     } else if (typeof value === 'object' && value.key && value.value) {
              //         if(typeof value.value === 'number')
              //         {
              //             if(value.key >= 0 && value.key <= 10 )
              //             {
              //                 return true;
              //             }
              //         }
              //         return selectedValues.includes(value.key);
              //     }
              //     return false;
              //     })
              // );
              // };
              return (
                <Box
                  p={{ sm: "20px", base: "12px" }}
                  width={"100%"}
                  borderRadius={"8px"}
                  bg={"white.100"}
                  border={"1px solid"}
                  box-shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
                  mb={10}
                  borderWidth={1}
                  borderColor="gray.100"
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
                        width={{ md: "10px", base: "20px" }}
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
                            <Box fontSize={{ sm: "14px", base: "8px" }}>
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
                              Applcaition Deadline: {object.ApplicationDeadline}
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
                </Box>
              );
            })
          )}
        </Box>

        {toggle ? (
          <Box
            display={{lg: 'flex' , base: 'none'}}
            // display={"flex"}
            flexDirection={"column"}
            flexWrap={"wrap"}
            width="100%"
            flex={1}
          >
            <Box borderWidth={1}
                borderColor="gray.100">
                <Heading mt={"22px"} ml={2} mb={2} variant={"p10"}>
                Previous Searches
                </Heading>
                {PreviousSearches.map((object, index) => {
                return (
                    <Box
                    borderWidth={1}
                    pb={4}
                    borderBottomColor="gray.100"
                    ml={2}
                    mt={2}
                    mr={2}
                    key={Math.random()}
                    >
                    <Heading
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        color={"gray"}
                        fontWeight={"normal"}
                        fontSize={16}
                        variant={"p4"}
                    >
                        {object.Search}
                        <Image
                        width={{ md: "10px", base: "20px" }}
                        src={cross.src}
                        marginRight={2}
                        />
                    </Heading>
                    </Box>
                );
                })}
          </Box>
        </Box>
        ) : (
          tempDataArray.map((object) => {
            return (
              <Box flex={4}>
                <Box
                  p={{ sm: "20px", base: "12px" }}
                  width={"100%"}
                  borderRadius={"8px"}
                  bg={"white.100"}
                  border={"1px solid"}
                  box-shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
                  mb={10}
                  borderWidth={1}
                  borderColor="gray.100"
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
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                      >
                        <Box display="flex">
                          <Image
                            mb={2}
                            width={{ md: "10px", base: "20px" }}
                            src={EmptyVector.src}
                            marginRight={2}
                          />
                          <Image
                            mb={2}
                            width={{ md: "10px", base: "20px" }}
                            src={cross.src}
                            marginRight={2}
                          />
                        </Box>
                        <Button
                          style={{ padding: "0px 0px 0px 0px" }}
                          variant="blue-btn"
                        >
                          Apply Now
                        </Button>
                      </Box>
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
                              {object.Salary}
                            </Heading>
                            <Box fontSize={{ sm: "14px", base: "8px" }}>
                              <GoDotFill style={{ color: "#D9D9D9" }} />
                            </Box>
                            <Heading color={"gray.text"} variant={"p4"}>
                              {object.EmploymentType}
                            </Heading>
                            <Box fontSize={{ sm: "14px", base: "8px" }}>
                              <GoDotFill style={{ color: "#D9D9D9" }} />
                            </Box>
                            <Heading color={"gray.text"} variant={"p4"}>
                              Experience: {object.Experience} years
                            </Heading>
                            <Box fontSize={{ sm: "14px", base: "8px" }}>
                              <GoDotFill style={{ color: "#D9D9D9" }} />
                            </Box>
                            <Heading color={"gray.text"} variant={"p4"}>
                              Applcaition Deadline: {object.ApplicationDeadline}
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
                  <Box mt={5}>
                    <Heading color={"gray.text"} variant={"p4"}>
                      Job Description
                    </Heading>
                    <Heading color={"gray.text"} variant={"p4"}>
                      Job Overview: As a Senior System Design Engineer, you will
                      be responsible for leading and contributing to the design,
                      development, and implementation of complex systems and
                      solutions. Your expertise in systems engineering
                      principles and methodologies will be crucial in ensuring
                      the successful delivery of projects within schedule,
                      budget, and quality parameters.
                    </Heading>

                    <Heading color={"gray.text"} variant={"p4"} mt={3}>
                      Responsibilities
                    </Heading>
                    {text.map((data, index) => (
                      <Heading
                        color={"gray.text"}
                        variant={"p4"}
                        display={"flex"}
                      >
                        {index + 1}.{" "}
                        <Heading ml={2} color={"gray.text"} variant={"p4"}>
                          {data.value}
                        </Heading>
                      </Heading>
                    ))}

                    <Heading color={"gray.text"} variant={"p4"} mt={3}>
                      Qualification and requirements
                    </Heading>
                    {text2.map((data, index) => (
                      <Heading
                        color={"gray.text"}
                        variant={"p4"}
                        display={"flex"}
                      >
                        {index + 1}.{" "}
                        <Heading ml={2} color={"gray.text"} variant={"p4"}>
                          {data.value}
                        </Heading>
                      </Heading>
                    ))}
                  </Box>
                </Box>
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
};

export default JobSearchResults;

// Comment Added 