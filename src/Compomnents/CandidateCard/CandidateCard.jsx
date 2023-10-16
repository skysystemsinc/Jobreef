import { Box, Circle, Heading, Image } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";

import { MdOutlineStarOutline } from "react-icons/md";
import Star from "@/assets/Images/Star.svg";
import Popovers from "../MembersTable/Popovers";
import Chip from "../Chip/Chip";
const CandidateCard = () => {
  const actionList = ["Download Attachments", "Archive"];

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
          mt={{ xl: "0px", base: "10px" }}
          justifyContent={"flex-end"}
          width={{ xl: "auto", base: "100%" }}
          gap={"5px"}
        >
          <Box display={"flex"} gap={"3px"} alignItems={"center"}>
            <Image width={"22px"} src={Star.src} />
            <Image width={"22px"} src={Star.src} />
            <Image width={"22px"} src={Star.src} />
            <Image width={"22px"} src={Star.src} />
            <Image width={"22px"} src={Star.src} />
          </Box>

          <Popovers actionList={actionList} />
        </Box>
      </Box>

      <Box>
        <Box display={"flex"} gap={"40px"} mt={"12px"} alignItems={"center"}>
          <Box>
            <Heading variant={"p10"}>Recent Experience</Heading>
            <Box
              mt={"10px"}
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
              mt={"10px"}
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
          <Heading mt={"22px"} variant={"p10"}>
            Relevant Skills
          </Heading>
        </Box>

        <Box display={"flex"} mt={"20px"} alignItems={"center"} flexWrap={"wrap"}>
          <Box mr={"20px"} mb={"10px"}>
            <Chip label={"Technical Knowledge"} />
          </Box>
          
          <Box mr={"20px"} mb={"10px"}>
            <Chip label={"Technical Knowledge"} />
          </Box>
          
          <Box mr={"20px"} mb={"10px"}>
            <Chip label={"Technical Knowledge"} />
          </Box>
          
          <Box mr={"20px"} mb={"10px"}>
            <Chip label={"Technical Knowledge"} />
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default CandidateCard;
