import { Box, Circle, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import edit_outline from "@/assets/Images/edit_outline.svg";
import trash from "@/assets/Images/trash.svg";
import moment from "moment";
const CeritifcateCard = ({
  data,
  state,
  setState,
  headingStyle,
  dispableBlueCard,
}) => {
  const [isSmallerThe500] = useMediaQuery("(max-width: 500px)");

  return (
    <Box
      p={{ sm: "15px 0px 20px 8px ", base: "12px" }}
      mb={{ md: "33px", base: "20px" }}
      width={"100%"}
      borderRadius={"8px"}
      bg={"white.100"}
      border={"1px solid"}
      borderColor={"gray.light"}
      filter="drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.05))"
    >
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        // borderBottom={"1px solid "}
        pr={"15px"}
        // borderColor={"gray.400"}
        flexWrap={{ xl: "nowrap", base: "wrap" }}
      >
        <Heading variant={"p7"} color={"gray.text"}>
          {data.certificateName}
        </Heading>

        <Box
          display={"flex"}
          alignItems={"center"}
          mt={{ xl: "0px", base: "10px" }}
          justifyContent={"flex-end"}
          width={{ xl: "auto", base: "100%" }}
          gap={"20px"}
        >
          <Box
            cursor={"pointer"}
            onClick={() =>
              setState((prev) => {
                return {
                  ...prev,
                  edit: true,
                };
              })
            }
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
          >
            <Image
              width={{ md: "17px", base: "16px" }}
              src={edit_outline.src}
            />
            <Heading variant={"p5"}>Edit</Heading>
          </Box>
          <Box
            cursor={"pointer"}
            onClick={() =>
              setState((prev) => {
                return {
                  ...prev,
                  delete: true,
                };
              })
            }
            display={"flex"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Image width={{ md: "17px", base: "16px" }} src={trash.src} />
            <Heading variant={"p5"}>Delete</Heading>
          </Box>
        </Box>
      </Box>
      <Box
        mt={{ md: "14px", base: "3px" }}
        display={"flex"}
        // alignItems={"flex-start"}
        alignItems={{ md: "flex-start", base: "center" }}
        flexWrap={{ md: "nowrap", base: "wrap" }}
        gap={{ md: "10px", sm: "6px", base: "5px" }}
      >
        <Heading color={"gray.text"} variant={"p12"} sx={headingStyle}>
          {data.organizationName}
        </Heading>
        <Box fontSize={{ sm: "14px", base: "8px" }}>
          <GoDotFill style={{ color: "#D9D9D9" }} />
        </Box>

        <Heading color={"gray.text"} variant={"p12"} sx={headingStyle}>
          {moment(data.stateDate).format("MMMM YYYY")} {" - "}
          {moment(data.endDate).format("MMMM YYYY")}
        </Heading>
        <Box fontSize={{ sm: "14px", base: "8px" }}>
          <GoDotFill style={{ color: "#D9D9D9" }} />
        </Box>

        <Heading
          display={"flex"}
          gap={"6px"}
          alignItems={{ md: "flex-start", base: "center" }}
          variant={"p12"}
          sx={headingStyle}
        >
          {" "}
          <HiLocationMarker
            style={{
              color: "#4A4A4A",
              fontSize: isSmallerThe500 ? "15px" : "20px",
            }}
          />{" "}
          {data.state}, {data.city}, {data.country}
        </Heading>
        <Box fontSize={{ sm: "14px", base: "8px" }}>
          <GoDotFill style={{ color: "#D9D9D9" }} />
        </Box>
        <Heading sx={headingStyle} color={"gray.text"} variant={"p12"}>
          Certificate Verification ID: {data.certificateId}
        </Heading>
      </Box>
      {/* <Box>
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
      </Box> */}
    </Box>
  );
};

export default CeritifcateCard;
