import React, { useState } from "react";
import { useContext } from "react";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import cross from "../../assets/Images/cross.svg";
import { useRouter } from 'next/router';
// import "./scrollbar.css";
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
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
} from "@chakra-ui/react";
import LoginModal from "../LoginModal/LoginModal";
import ApplyForThisJobModal from "./ApplyForThisJobModal";
import { Role_context } from "../../context/context";

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

const ShowClickJobSearchBox = ({ object, toggle, settoggle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { templogin } = useContext(Role_context);
  const router = useRouter();
  return (
    <Box flex={4} position={{lg:'sticky',md:'sticky',base:''}} top="180px" >
      {templogin ? (
        <ApplyForThisJobModal open={isOpen} onClose={onClose} object={object} />
      ) : (
        <LoginModal open={isOpen} onClose={onClose} />
      )}
      <Box
        p={{ sm: "20px", base: "12px" }}
        width={"100%"}
        borderRadius={"8px"}
        bg={"white.100"}
        border={"1px solid"}
        box-shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
        mb={{lg:10,base:'50px'}}
        borderWidth={1}
        borderColor="gray.400"
        height={{ lg: "70vh" }}
        className="scrollableBox"
        overflowY="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "5px",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#797979",
            borderRadius: "30px",
          },
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
              {/* <button onClick={() => router.push('/candidate/job-search-selectedjob')}>
    {object.title}
</button> */}
              <Box>
                <Heading variant={"p7"} fontWeight={700} color={"gray.text"}
                _hover={{ textDecoration: 'underline', color: 'black'}}
                 onClick={() => router.push('/candidate/job-search-selectedjob')}
                 style={{ cursor: 'pointer' }}
                  >
                      {object.title}
                  </Heading>
                  <Box mt={"5px"} display={"flex"} alignItems={"center"}>
                    <Heading variant={"p4"} color={"gray.text"} marginRight={1}>
                      {object.name}
                    </Heading>
                    <Box ml={1} mt={"4px"} display="flex" alignItems="center">
                      <ComponentMyChip label={object.tags} />
                    </Box>
                  </Box>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
              <Box mb={"10px"} display="flex" gap={"6px"}>
                <Image
                  mb={2}
                  width={"10px"}
                  src={EmptyVector.src}
                  marginRight={2}
                />
                <Image
                  mb={2}
                  width={"10px"}
                  src={cross.src}
                  marginRight={2}
                  onClick={() => {
                    settoggle(true);
                    localStorage.setItem("myData", null);
                  }}
                />
              </Box>
              <Button
                onClick={onOpen}
                sx={{
                  height: { sm: "38px", base: "32px" },
                  // width: { md: "200px", sm: "180px", base: "168px" },
                  fontSize: { sm: "13px", base: "10px" },

                  width: {
                    xl: "150px",
                    md: "150px",
                    lg: "140px",
                    sm: "101px",
                    base: "88px",
                  },
                }}
                style={{ padding: "0px 0px 0px 0px" }}
                variant="blue-btn"
              >
                Apply Now
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} gap={"40px"} mt={"12px"} alignItems={"center"}>
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
                  <Heading fontWeight={500} color={"gray.text"} variant={"p4"}>
                    Application Deadline: {object.ApplicationDeadline}
                  </Heading>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Heading
              color={"black.100"}
              fontWeight={600}
              mt={"22px"}
              variant={"p10"}
            >
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
          {/* <Heading color={"gray.text"} variant={"p4"}>
            Job Description
          </Heading> */}
          <Heading color={"gray.text"} variant={"p4"}>
            Job Overview: As a Senior System Design Engineer, you will be
            responsible for leading and contributing to the design, development,
            and implementation of complex systems and solutions. Your expertise
            in systems engineering principles and methodologies will be crucial
            in ensuring the successful delivery of projects within schedule,
            budget, and quality parameters.
          </Heading>

          <Heading
            fontWeight={700}
            my={"10px"}
            color={"gray.text"}
            variant={"p4"}
            mt={3}
          >
            Responsibilities
          </Heading>
          <OrderedList color={"gray.text"} variant={"p4"} fontSize={'15px'}>
          {text.map((data, index) => (
            <Box key={index}>             
                <ListItem>
                  <Heading  color={"gray.text"} variant={"p4"} display={"flex"}>
                    {data.value}
                  </Heading>
                </ListItem>   
            </Box>
          ))}
          </OrderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowClickJobSearchBox;
