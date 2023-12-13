import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import Chip from "../Chip/Chip";
import { FiDownload } from "react-icons/fi";
const Resume = () => {
  const selectedCandidates = useSelector(
    (state) => state.candidates.value.selected
  );

  return (
    <Box
      bg={"white.100"}
      boxShadow={
        "0px 1px 2px 0px rgba(16, 24, 40, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"
      }
      borderRadius={"0px 8px 8px 8px"}
      p={{ md: "20px 30px", base: "20px 18px 20px 18px" }}
    >
      <Box>
        <Flex justifyContent={"flex-end"}>
          <Heading
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
            fontWeight={500}
            color={"blue.500"}
            as={"p"}
            variant={"p4"}
            cursor={"pointer"}
          >
            <FiDownload />
            Download Resume
          </Heading>
        </Flex>
        <Box>
          <Heading mb="7px" color={"gray.text"} variant={"p7"}>
            Candidate Summary
          </Heading>
          <Heading
            mb={"21px"}
            fontWeight={400}
            color={"gray.text"}
            as={"p"}
            variant={"p4"}
          >
            {selectedCandidates?.canididateSummary}
          </Heading>
          <Heading color={"gray.text"} variant={"p7"}>
            Work Experience
          </Heading>
          <Box
            mt={{ md: "7px", base: "5px" }}
            // mb={{ md: "10px", base: "10px" }}
            mb={"10px"}
            display={"flex"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={{ md: "10px", sm: "6px", base: "5px" }}
          >
            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              {selectedCandidates?.desiginatation}
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
              <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>

            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              {selectedCandidates?.companyName}
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
              <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>

            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              {"04/2017 - Present"}
            </Heading>
          </Box>
          <Heading
            fontWeight={400}
            color={"gray.text"}
            as={"p"}
            variant={"p12"}
          >
            {selectedCandidates?.jobSummary}
          </Heading>
          <Box
            mt={{ md: "19px", base: "10px" }}
            // mb={{ md: "8px", base: "3px" }}
            mb={"10px"}
            display={"flex"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={{ md: "10px", sm: "6px", base: "5px" }}
          >
            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              {selectedCandidates?.desiginatation}
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
              <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>

            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              {selectedCandidates?.companyName}
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
              <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>

            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              {"04/2017 - Present"}
            </Heading>
          </Box>
          <Heading
            fontWeight={400}
            color={"gray.text"}
            as={"p"}
            variant={"p12"}
          >
            {selectedCandidates?.jobSummary}
          </Heading>

          <Heading
            mt={{ md: "25px", base: "10px" }}
            color={"gray.text"}
            variant={"p7"}
          >
            Education History
          </Heading>
          <Box
            mt={{ md: "7px", base: "5px" }}
            // mb={{ md: "10px", base: "3px" }}
            mb={"10px"}
            display={"flex"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={{ md: "10px", sm: "6px", base: "5px" }}
          >
            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              {selectedCandidates?.diploma}
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
              <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>

            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              {selectedCandidates?.schoolName}
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
              <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>

            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              Currently Enrolled
            </Heading>
          </Box>
          <Heading
            fontWeight={400}
            color={"gray.text"}
            as={"p"}
            variant={"p12"}
          >
            {selectedCandidates?.educationSummary}
          </Heading>

          <Heading
            mt={{ md: "25px", base: "10px" }}
            color={"gray.text"}
            variant={"p7"}
          >
            Certification
          </Heading>
          <Box
            mt={{ md: "7px", base: "5px" }}
            // mb={{ md: "10px", base: "3px" }}
            mb={"10px"}
            display={"flex"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={{ md: "10px", sm: "6px", base: "5px" }}
          >
            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              Walter Payton College Preparatory High School
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
              <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>

            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              September 2017 - July 2023
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
              <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>

            <Heading
              whiteSpace={"pre-wrap"}
              fontWeight={600}
              color={"gray.text"}
              variant={"p12"}
            >
              Certificate Verification ID: 2f8ae5bfaa4c46dc3bba77655130f32a
            </Heading>
          </Box>
          <Heading
            mt={{ md: "25px", base: "10px" }}
            color={"gray.text"}
            variant={"p7"}
          >
            Achievements
          </Heading>
          <Box
            mt={{ md: "7px", base: "5px" }}
            // mb={{ md: "10px", base: "3px" }}
            mb={"10px"}
            display={"flex"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={{ md: "10px", sm: "6px", base: "5px" }}
          >
            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              Junior Achievement Award
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
              <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>

            <Heading fontWeight={600} color={"gray.text"} variant={"p12"}>
              Junior Achievement
            </Heading>
            <Box fontSize={{ sm: "14px", base: "8px" }}>
              <GoDotFill style={{ color: "#D9D9D9" }} />
            </Box>

            <Heading
              whiteSpace={"pre-wrap"}
              fontWeight={600}
              color={"gray.text"}
              variant={"p12"}
            >
              06/2012
            </Heading>
          </Box>
          <Heading
            mt={{ md: "20px", base: "10px" }}
            color={"gray.text"}
            variant={"p7"}
          >
            Skills
          </Heading>

          <Box
            display={"flex"}
            mt={"12px"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            {selectedCandidates?.skills?.map((item) => {
              return (
                <Box mr={{ md: "18px", base: "14px" }} mb={"10px"}>
                  <Chip label={item.name} />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
