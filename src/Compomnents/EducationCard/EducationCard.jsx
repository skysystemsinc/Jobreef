import { Box, Circle, Heading, Image } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import edit_outline from "@/assets/Images/edit_outline.svg";
import trash from "@/assets/Images/trash.svg";
const EducationCard = ({dispableBlueCard}) => {
  return (
    <Box
      p={{ sm: "20px", base: "12px" }}
      mb={{ md: "33px", base: "20px" }}
      width={"100%"}
      borderRadius={"8px"}
      bg={"white.100"}
      border={"1px solid"}
      borderColor={"gray.light"}
      box-shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
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
        >
          {/* <Box>
            <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} />
          </Box> */}
          <Box>
            <Heading variant={"p7"} color={"gray.text"}>
              Diploma Name
            </Heading>
            <Box
              mt={{ md: "8px", base: "3px" }}
              display={"flex"}
              alignItems={"center"}
              flexWrap={"wrap"}
              gap={{ md: "13px", sm: "6px", base: "5px" }}
            >
              <Heading color={"gray.text"} variant={"p4"}>
                Walter Payton College Preparatory High School
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>

              <Heading color={"gray.text"} variant={"p4"}>
                September 2017 - July 2023
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>

              <Heading
                display={"flex"}
                gap={"6px"}
                alignItems={"center"}
                variant={"p4"}
              >
                {" "}
                <HiLocationMarker style={{ color: "#4A4A4A" }} /> Chicago,
                Illinois, USA
              </Heading>
            </Box>
          </Box>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          mt={{ xl: "0px", base: "10px" }}
          justifyContent={"flex-end"}
          width={{ xl: "auto", base: "100%" }}
          gap={"20px"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Image
              width={{ md: "19px", base: "16px" }}
              src={edit_outline.src}
            />
            <Heading variant={"p5"}>Edit</Heading>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <Image width={{ md: "19px", base: "16px" }} src={trash.src} />
            <Heading variant={"p5"}>Delete</Heading>
          </Box>
        </Box>
      </Box>

      <Box>
        <Heading
          lineHeight={"25px"}
          pt={"20px"}
          color={"gray.text"}
          variant={"p5"}
        >
          Lead the design and development of system architectures, ensuring they
          meet the project requirements, performance criteria, and scalability.
          Requirements Analysis: Collaborate with stakeholders, customers, and
          cross-functional teams to gather and analyze system requirements,
          ensuring clear and unambiguous specifications. Oversee the integration
          of hardware and software components into cohesive systems, addressing
          compatibility, functionality, and performance. Did Risk Assessment and
          Mitigation to Identify potential risks in the system design and
          develop ...
        </Heading>
      </Box>
    </Box>
  );
};

export default EducationCard;
