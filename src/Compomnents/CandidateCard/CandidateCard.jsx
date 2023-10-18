import { Box, Circle, Heading, Image } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";

import { MdOutlineStarOutline } from "react-icons/md";
import Star from "@/assets/Images/Star.svg";
import Popovers from "../MembersTable/Popovers";
import Chip from "../Chip/Chip";
const CandidateCard = ({ cardStatus, handleEvent , popOverList }) => {
  const actionList = ["Download Attachments", "Archive"];

  return (
    <Box
      onClick={handleEvent}
      cursor={"pointer"}
      height={"max-content"}
      p={{ md: "17px 36px  ", base: "7px 16px 14px 16px" }}
      mb={{ md: "32px", base: "20px" }}
      width={"100%"}
      borderRadius={"8px"}
      bg={"white.100"}
      border={"1px solid "}
      borderColor={"gray.light"}
      boxShadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
    >
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        mt={"12px"}
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
            <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
              Diploma Name
            </Heading>
            <Heading
              mt={{ md: "8px", base: "3px" }}
              variant={"p4"}
              color={"gray.text"}
            >
              Nassau, The Bahamas
            </Heading>
          </Box>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          mt={{ xl: "0px", base: "10px" }}
          gap={"5px"}
        >
          <Box display={"flex"} gap={"3px"} alignItems={"center"}>
            <Image width={{ md: "22px", base: "17px" }} src={Star.src} />
            <Image width={{ md: "22px", base: "17px" }} src={Star.src} />
            <Image width={{ md: "22px", base: "17px" }} src={Star.src} />
            <Image width={{ md: "22px", base: "17px" }} src={Star.src} />
            <Image width={{ md: "22px", base: "17px" }} src={Star.src} />
          </Box>

          <Popovers width="100%" actionList={popOverList} />
        </Box>
      </Box>

      <Box position={"relative"}>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          gap={{ md: "40px", base: "14px" }}
          flexDirection={{ md: "row", base: "column" }}
          mt={"12px"}
          alignItems={{ md: "center", base: "flex-start" }}
          flexWrap={"wrap"}
        >
          <Box>
            <Heading variant={"p10"}>Recent Experience</Heading>
            <Box
              mt={{ md: "10px", base: "6px" }}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Heading color={"gray.text"} variant={"p4"}>
                Systems Analyst
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>
              <Heading color={"gray.text"} variant={"p4"}>
                ABC Company
              </Heading>
            </Box>
          </Box>
          <Box>
            <Heading variant={"p10"}>Education</Heading>
            <Box
              // mt={"10px"}
              mt={{ md: "10px", base: "6px" }}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Heading color={"gray.text"} variant={"p4"}>
                Bachelor’s Degree
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>
              <Heading color={"gray.text"} variant={"p4"}>
                University of The Bahamas
              </Heading>
            </Box>
          </Box>
        </Box>
        <Box>
          <Heading mt={{ md: "16px", base: "10px" }} variant={"p10"}>
            Relevant Skills
          </Heading>
        </Box>

        <Box
          display={"flex"}
          mt={"12px"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Box mr={{ md: "38px", base: "14px" }} mb={"10px"}>
            <Chip label={"Technical Knowledge"} />
          </Box>

          <Box mr={{ md: "38px", base: "14px" }} mb={"10px"}>
            <Chip label={"System Architecture"} />
          </Box>

          <Box mr={{ md: "38px", base: "14px" }} mb={"10px"}>
            <Chip label={"Risk Management"} />
          </Box>

          <Box mr={{ md: "38px", base: "14px" }} mb={"10px"}>
            <Chip label={"Q/A Testing"} />
          </Box>
          <Box mr={{ md: "38px", base: "14px" }} mb={"10px"}>
            <Chip label={"Leadership"} />
          </Box>
          <Box mr={{ md: "38px", base: "14px" }} mb={"10px"}>
            <Chip label={"Product Design"} />
          </Box>
        </Box>

        <Heading
          variant={"p10"}
          textAlign={"end"}
          // position={"absolute"}
          // bottom={"0px"}
          // right={"0px"}
          // // mt="10px"

          // padding={"10px"}
        >
          {" "}
          Status:{" "}
          <Box as="span" color={"orange.100"}>
            {" "}
            {cardStatus}
          </Box>
        </Heading>
      </Box>
    </Box>
  );
};

export default CandidateCard;
