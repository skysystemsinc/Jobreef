import React, { useState } from "react";
import profile_icon from "@/assets/Images/profile_icon.svg";
import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import Star from "../Stars/Star";
import black_email from "@/assets/Images/black_email.svg";
import black_arrow_left from "@/assets/Images/black_arrow_left.svg";
import black_arrow_down from "@/assets/Images/black-arrow-down.svg";
import download from "@/assets/Images/download.svg";
import { GoDotFill } from "react-icons/go";
import NotePadModal from "../NotePadModal/NotePadModal";
import { BiNotepad } from "react-icons/bi";
import { useSelector } from "react-redux";
import moment from "moment";
import Chip from "../Chip/Chip";
import {
  HiChevronLeft,
  HiOutlineChevronLeft,
  HiOutlineMail,
} from "react-icons/hi";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

import { HiArrowDownTray, HiMiniArrowDownTray } from "react-icons/hi2";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { BsChevronDown, BsStarFill } from "react-icons/bs";
import { PiDownloadSimpleBold } from "react-icons/pi";

const SelectedCandidateCard = ({ matchCandidate }) => {
  const selectedCandidates = useSelector(
    (state) => state.candidates.value.selected
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconWidth = {
    width: { md: "14px", base: "13px" },
  };
  const hoverStyle = {
    cursor: "pointer",
    _hover: {
      color: "blue.500",
      cursor: "pointer",
    },
  };

  const profileBtn = [
    {
      name: "Send Message",
      icon: <HiOutlineMail className="hoverColor" />,
    },
    {
      name: "Download Attachments",
      icon: <PiDownloadSimpleBold className="hoverColor" />,
    },
    {
      name: "Status",
      span: "read",
      icon: <BsChevronDown className="hoverColor" />,
    },
  ];
  return (
    <>
      <NotePadModal open={isOpen} onClose={onClose} />

      <Box
        border={"1px  solid"}
        borderRadius={"8px"}
        borderColor={"gray.lightBorder"}
        padding={"15px"}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={"5px"}
          mb={"18px"}
          cursor={"pointer"}
          role="group"
        >
          <Box
            transition={".5s"}
            _groupHover={{
              color: "blue.500",
            }}
            fontSize={"20px"}
            color={"gray.600"}
          >
            <HiOutlineChevronLeft />
          </Box>
          <Heading
            transition={".5s"}
            _groupHover={{
              color: "blue.500",
            }}
            fontWeight={400}
            color={"black.100"}
            as={"p"}
            variant={"p4"}
          >
            Return
          </Heading>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          borderBottom={"1px solid"}
          alignItems={"flex-start"}
          // flexWrap={"wrap"}
          flexDirection={{ xl: "row", base: "column" }}
          gap="10px"
          // flexWrap={"wrap"}
          // flexDirection={{ "2xl": "row", base: "column" }}
          borderColor={"gray.lightBorder"}
          pb={"7px"}
        >
          <Box width={"100%"}>
            <Box
              width={{ xl: "250px" , base:"100%"}}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              flexDirection={"column"}
              justifyContent={"center"}
              // border={"1px solid red"}
              borderRadius={"10px"}
              textAlign={"center"}
              padding={"20px"}
              boxShadow={
                " 0px 1px 2px 0px rgba(16, 24, 40, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"
              }

              // border={"2px solid red"}
              // width={"50%"}
            >
              <Image
                width={"62px"}
                height={"62px"}
                objectFit={"cover"}
                src={profile_icon.src}
              />
              <Box>
                <Heading color={"gray.text"} as={"p"} variant={"p7"}>
                  {selectedCandidates?.name}
                </Heading>

                <Heading
                  margin={"6px 0px 8px 0px"}
                  fontWeight={400}
                  color={"gray.text"}
                  as={"p"}
                  variant={"p4"}
                >
                  {selectedCandidates?.country}, {selectedCandidates?.state}
                </Heading>
                <Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    gap={{ md: "10px", base: "6px" }}
                    flexWrap={"wrap"}
                  >
                    <Star
                      starIcon={
                        <BsStarFill color="#f4b024" fontSize={"15px"} />
                      }
                      star={[1, 2, 3, 4]}
                    />

                    <Heading
                      fontWeight={400}
                      color={"gray.text"}
                      as={"p"}
                      variant={"p4"}
                    >
                      Applied On:{" "}
                      {moment(selectedCandidates?.createAt).format(
                        "DD/MM/YYYY"
                      )}
                    </Heading>
                  </Box>
                </Box>
              </Box>
            </Box>

            {profileBtn.map((item) => {
              return (
                <Box
                  border={"1px solid"}
                  borderColor={"white.100"}
                  display={"flex"}
                  borderRadius={"10px"}
                  role="group"
                  alignItems={"center"}
                  my={"10px"}
                  gap={"5px"}
                  padding={"15px 0px"}
                  justifyContent={"center"}
                  boxShadow={
                    " 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"
                  }
                  // bg={"gray.200"}
                  transition={".5s"}
                  cursor={"pointer"}
                  _hover={{
                    backgroundColor: "gray.200",
                    border: "1px solid  ",
                    "& .hoverColor": {
                      color: "blue.500",
                    },
                    borderColor: "blue.500",
                  }}
                >
                  <Heading
                    _groupHover={{
                      color: "blue.500",
                    }}
                    color={"black.100"}
                    variant={"p10"}
                    transition={".5s"}
                  >
                    {item.name}
                    <Heading
                      transition={".5s"}
                      _groupHover={{
                        color: "blue.500",
                      }}
                      color={"black.100"}
                      variant={"p10"}
                      sx={{ fontWeight: 700, ml: "5px" }}
                      as={"span"}
                    >
                      {item.span}
                    </Heading>
                  </Heading>
                  {/* <PiDownloadSimpleBold color="#2CA5C3" /> */}

                  <Box fontSize={"16px"}>{item.icon}</Box>
                </Box>
              );
            })}

            {/* <Box
            bg={"gray.200"}
            border={"1px solid"}
            borderColor={"blue.500"}
            display={"flex"}
            borderRadius={"10px"}
            alignItems={"center"}
            my={"10px"}
            gap={"10px"}
            padding={"15px 0px"}
            justifyContent={"center"}
          >
            
            <Heading color={"blue.500"} variant={"p10"}>
              Messages
            </Heading>
            <HiOutlineMail color="#2CA5C3" />
          </Box>
          <Box
            bg={"gray.200"}
            border={"1px solid"}
            borderColor={"blue.500"}
            display={"flex"}
            borderRadius={"10px"}
            alignItems={"center"}
            my={"10px"}
            gap={"10px"}
            padding={"15px 0px"}
            justifyContent={"center"}
          >
            
            <Heading color={"blue.500"} variant={"p10"}>
              Status
            </Heading>
            <MdOutlineKeyboardArrowDown color="#2CA5C3" />
          </Box> */}
          </Box>
          <Box
            bg={"white.100"}
            boxShadow={
              "0px 1px 2px 0px rgba(16, 24, 40, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"
            }
            borderRadius={"8px"}
            border={"none "}
            borderColor={"gray.light"}
            p={{ md: "20px 30px", base: "20px 5px 20px 15px" }}
          >
            <Box mt={"20px"}>
              <Box>
                <Heading mb="13px" color={"gray.text"} variant={"p7"}>
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
                  mt={{ md: "31px", base: "10px" }}
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
                  mt={{ md: "21px", base: "5px" }}
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

                <Heading
                  mt={{ md: "25px", base: "10px" }}
                  color={"gray.text"}
                  variant={"p7"}
                >
                  Certification
                </Heading>
                <Box
                  mt={{ md: "21px", base: "5px" }}
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
                    Certificate Verification ID:
                    2f8ae5bfaa4c46dc3bba77655130f32a
                  </Heading>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SelectedCandidateCard;
