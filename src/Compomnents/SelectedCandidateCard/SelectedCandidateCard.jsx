import React, { useState } from "react";
import profile_icon from "@/assets/Images/profile_icon.svg";
import { Box, Heading, Image, useDisclosure, Button } from "@chakra-ui/react";
import Star from "../Stars/Star";
import black_email from "@/assets/Images/black_email.svg";
import black_arrow_left from "@/assets/Images/black_arrow_left.svg";
import black_arrow_down from "@/assets/Images/black-arrow-down.svg";
import download from "@/assets/Images/download.svg";
import { GoDotFill } from "react-icons/go";
import NotePadModal from "../NotePadModal/NotePadModal";
import { BiNotepad, BiSolidNotepad } from "react-icons/bi";
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
import { PiDownloadSimpleBold, PiNotepadLight } from "react-icons/pi";
import CandidateTabs from "../CandidateTabs/CandidateTabs";

const SelectedCandidateCard = ({  profileBtn, matchCandidate, toggle, setToggle }) => {
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

  // const profileBtn = [
  //   {
  //     name: "Send Message",
  //     icon: <HiOutlineMail className="hoverColor" />,
  //     // disable: matchCandidate ? false : true,
  //     disable: matchCandidate ? false : true,


  //   },
  //   {
  //     name: "false",
  //     icon: <HiOutlineMail className="hoverColor" />,
  //     disable: matchCandidate ? false : true,

  //   },
  //   {
  //     name: "Status:",
  //     span: "read",
  //     icon: <BsChevronDown className="hoverColor" />,
  //     disable: matchCandidate ? false : true,

  //   },

  // ];
  return (
    <>
      <NotePadModal open={isOpen} onClose={onClose} />

      <Box
        border={"1px  solid"}
        borderRadius={"8px"}
        borderColor={"gray.lightBorder"}
        padding={"15px 30px "}
        bg={"white1.100"}
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
          
          
          pb={"7px"}
        >
          <Box width={"100%"} flex={1}>
            <Box
              width={{ base: "100%" }}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              borderRadius={"10px"}
              padding={"20px"}
              bg={"white.100"}
              boxShadow={
                " 0px 1px 2px 0px rgba(16, 24, 40, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"
              }

              // border={"2px solid red"}
              // width={"50%"}
            >
              <Box display={"flex"} alignItems={"center"} gap={"18px"}>
                <Image
                  mx={"auto"}
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
                    margin={"0px 0px 3px 0px"}
                    fontWeight={400}
                    color={"gray.text"}
                    as={"p"}
                    variant={"p4"}
                  >
                    {selectedCandidates?.country}, {selectedCandidates?.state}
                  </Heading>
                  <Box>
                    <Box>
                      <Box mt={"8px"} mb={"5px"}>
                        <Star
                          starIcon={
                            <BsStarFill color="#f4b024" fontSize={"15px"} />
                          }
                          star={[1, 2, 3, 4]}
                        />
                      </Box>
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
              <Box>
                {profileBtn.map((item) => {
                  return !item.disable ? (
                    <Box
                      onClick={item.handleEvent}
                      border={"1px solid"}
                      borderColor={"white.100"}
                      display={"flex"}
                      borderRadius={"10px"}
                      role="group"
                      alignItems={"center"}
                      my={"10px"}
                      gap={"5px"}
                      bg={"white.100"}
                      padding={"15px 40px"}
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
                      sx={item.style}
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
                  ) : null;
                })}
              </Box>
            </Box>

            {/* {matchCandidate ? null : (
              <Box
                onClick={() => {
                  toggle ? setToggle(false) : setToggle(true);
                }}
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
                  {toggle ? "Close NotePad" : "Open Notepad"}
                  <Heading
                    transition={".5s"}
                    _groupHover={{
                      color: "blue.500",
                    }}
                    color={"black.100"}
                    variant={"p10"}
                    sx={{ fontWeight: 700, ml: "5px" }}
                    as={"span"}
                  ></Heading>
                </Heading>

                <Box fontSize={"16px"}></Box>
              </Box>
            )} */}
          </Box>

          <CandidateTabs matchCandidate={matchCandidate}/>

         
        </Box>
      </Box>
    </>
  );
};

export default SelectedCandidateCard;
