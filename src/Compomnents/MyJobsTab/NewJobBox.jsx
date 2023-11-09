import React from "react";
import { Box, Circle, Flex, Heading, Image, Link } from "@chakra-ui/react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import ComponentMyChip from "./ComponentMyChip";

const NewJobBox = ({ key, object }) => {
  return (
    <Link href="/job-search-selectedjob" style={{ textDecoration: "none" }}>
      <Box
        p={{ sm: "20px", base: "12px" }}
        width={"100%"}
        borderRadius={"8px"}
        bg={"white.100"}
        border={"1px solid"}
        borderColor={"gray.light"}
        box-shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
        transition={"all 0.4s ease"}
        _hover={{
          cursor: "pointer",
          boxShadow:
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
          border: "1px solid #2CA5C3",
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
          pb={{ lg: "10px", base: "10px" }}
        >
          <Box
            display={"flex"}
            alignItems={"flex-start"}
            gap={{ md: "18px", base: "12px" }}
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
              <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
                {object.title}
                <Box display={"flex"} alignItems={"center"}>
                  <Heading variant={"p4"} color={"gray.text"} marginRight={1}>
                    {object.name}
                  </Heading>
                  <Box ml={1} mt={"4px"} display="flex" alignItems="center">
                    <ComponentMyChip label={object.tags} />
                  </Box>
                </Box>
              </Heading>
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
                  gap={"7px"}
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
                    {object.JobModel}
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
                    Applied On: {object.ApplicationDeadline}
                  </Heading>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Heading mt={"14px"} variant={"p10"}>
              Desired Skills
            </Heading>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Box
              display={"flex"}
              mt={"10px"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              {object.DesiredSkills.map((skill) => {
                return (
                  <Box key={Math.random()} mr={"20px"} mb={"5px"}>
                    <ComponentMyChip label={skill} />
                  </Box>
                );
              })}
            </Box>
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Heading display="flex" mb={"10px"} variant={"p10"}>
                Status:
                <span style={{ marginLeft: "4%", color: "green" }}> New</span>
              </Heading>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default NewJobBox;
