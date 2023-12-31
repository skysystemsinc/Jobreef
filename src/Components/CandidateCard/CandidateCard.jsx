import { Box, Circle, Heading, Image } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";

import { MdOutlineStarOutline } from "react-icons/md";
import Star from "@/assets/Images/Star.svg";
import Popovers from "../PaginatedTable/Popovers";
import Chip from "../Chip/Chip";
import squareTick from "@/assets/Images/greenCheck.svg";
import redCross from "@/assets/Images/redCross.svg";
const CandidateCard = ({
  matchCandidate,
  cardStatusDisable,
  cardStatus,
  status,
  jobData,
  data,
  handleEvent,
  popOverList,
}) => {
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
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={{ lg: "29px", base: "15px" }}
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
              <Heading variant={"p7"} fontWeight={700} color={"blue.500"}>
                {`${data?.user?.firstName}  ${data?.user?.lastName}`}
              </Heading>
              <Heading
                mt={{ md: "8px", base: "3px" }}
                variant={"p4"}
                color={"gray.text"}
              >
                {data?.location?.country}, {data?.location?.province}
              </Heading>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            gap={{ md: "30px", base: "14px" }}
            flexDirection={{ md: "row", base: "column" }}
            // mt={"12px"}

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
                  {data?.workExperience && data?.workExperience[0]?.designation}
                </Heading>
                <Box fontSize={{ sm: "14px", base: "8px" }}>
                  <GoDotFill style={{ color: "#D9D9D9" }} />
                </Box>
                <Heading color={"gray.text"} variant={"p4"}>
                  {data?.workExperience && data?.workExperience[0]?.companyName}
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
                  {data?.education && data?.education[0]?.schoolName}
                </Heading>
                <Box fontSize={{ sm: "14px", base: "8px" }}>
                  <GoDotFill style={{ color: "#D9D9D9" }} />
                </Box>
                <Heading color={"gray.text"} variant={"p4"}>
                  {data?.education && data?.education[0]?.diploma}
                </Heading>
              </Box>
            </Box>
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
            <Image width={"15px"} src={Star.src} />
            <Image width={"15px"} src={Star.src} />
            <Image width={"15px"} src={Star.src} />
            <Image width={"15px"} src={Star.src} />
            <Image width={"15px"} src={Star.src} />
          </Box>

          {popOverList?.length == 0 ? null : (
            <Popovers width="100%" data={jobData} actionList={popOverList} />
          )}
        </Box>
      </Box>

      <Box
        position={"relative"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"10px"}
        flexWrap={{ lg: "nowrap", base: "wrap" }}
      >
        <Box maxW={{ sm: "500px", base: "100%" }}>
          <Box>
            <Heading mt={{ md: "16px", base: "10px" }} variant={"p10"}>
              Relevant Skills
            </Heading>
          </Box>

          <Box
            border={"1px solid red red"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <Box
              display={"flex"}
              mt={"12px"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              {data?.skills?.map((item, ind) => {
                return (
                  <Box key={ind} mr={{ md: "18px", base: "14px" }} mb={"10px"}>
                    <Chip label={item.name} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        {matchCandidate ? null : (
          <Box minW={{ sm: "370px", base: "100%" }}>
            <Heading
              mb={"14px"}
              mt={{ lg: "16px", base: "0px" }}
              variant={"p10"}
            >
              Screening Questions
            </Heading>
            <Box>
              <Chip
                label={"Do you have a valid driver’s license? YES"}
                icon={squareTick}
                style={{ width: "100%", mb: "10px" }}
              />
              <Chip
                label={"Have you ever been convicted of a crime? YES"}
                icon={redCross}
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
        )}
        {cardStatusDisable ? null : (
          <Heading
            alignSelf={"flex-end"}
            whiteSpace={"nowrap"}
            variant={"p10"}
            textAlign={"end"}
          >
            {" "}
            Status:{" "}
            <Box as="span" color={"blue.500"}>
              {" "}
              {status}
            </Box>
          </Heading>
        )}
      </Box>
    </Box>
  );
};

export default CandidateCard;
