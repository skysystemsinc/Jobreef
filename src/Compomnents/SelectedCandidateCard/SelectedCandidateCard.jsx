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
import { HiOutlineMail } from "react-icons/hi";

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
    "&:hover": {
      color: "blue.500F",
    },
  };
  return (
    <>
      <NotePadModal open={isOpen} onClose={onClose} />
      <Box
        bg={"gray.200"}
        borderRadius={"8px"}
        border={"none "}
        borderColor={"gray.light"}
        p={{ md: "20px 30px", base: "20px 5px 20px 15px" }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          borderBottom={"1px solid"}
          alignItems={"flex-start"}
          // flexWrap={"wrap"}
          flexDirection={{ "2xl": "row", base: "column" }}
          borderColor={"gray.lightBorder"}
          pb={"7px"}
        >
          <Box
            display={"flex"}
            alignItems={{ sm: "center", base: "flex-start" }}
            gap={"10px"}
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
                  gap={{ md: "10px", base: "6px" }}
                  flexWrap={"wrap"}
                >
                  <Star star={[1, 2, 3, 4, 5]} />
                  <Box
                    width={"2px"}
                    height={{ md: "15px", base: "13px" }}
                    mt={{ md: "0px", base: "2px" }}
                    bg={"gray.light"}
                  />
                  <Heading
                    fontWeight={400}
                    color={"gray.text"}
                    as={"p"}
                    variant={"p4"}
                  >
                    Applied On:{" "}
                    {moment(selectedCandidates?.createAt).format("DD/MM/YYYY")}
                  </Heading>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"flex-end"}
            // flexWrap={"wrap"}
            // border={"1px solid red"}
            mt={{ "2xl": "0px", base: "10px" }}
            width={{ "2xl": "max-content", base: "100%" }}
            // whiteSpace={"nowrap"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              flexWrap={"wrap"}
              justifyContent={"flex-end"}
            >
              <Box display={"flex"} alignItems={"center"} gap={"3px"}>
                <Image
                  src={black_arrow_left.src}
                  width={{ md: "24px", base: "20px" }}
                  sx={iconWidth}
                />
                <Heading color={"black.100"} variant={"p10"}>
                  Return
                </Heading>
              </Box>
              {matchCandidate ? (
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  {/* <Image sx={iconWidth} src={black_email.src} /> */}
                  <HiOutlineMail />
                  <Heading  color={"black.100"} variant={"p10"} sx={hoverStyle}>
                    Invite to Apply
                  </Heading>
                </Box>
              ) : (
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Image sx={iconWidth} src={black_email.src} />
                  <Heading color={"black.100"} variant={"p10"}>
                    Send Message
                  </Heading>
                </Box>
              )}

              {matchCandidate ? null : (
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Image sx={iconWidth} src={download.src} />
                  <Heading color={"black.100"} variant={"p10"}>
                    Download Attachments
                  </Heading>
                </Box>
              )}
            </Box>
            {matchCandidate ? null : (
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                // border={"1px solid red"}
                width={"100%"}
                gap={"10px"}
                mt={"7px"}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  gap={"3px"}
                >
                  <Heading color={"black.100"} variant={"p10"}>
                    Status:{" "}
                    <Box as="span" fontWeight={700}>
                      Read
                    </Box>
                  </Heading>
                  <Image
                    width={"20px"}
                    sx={iconWidth}
                    src={black_arrow_down.src}
                  />
                </Box>
                <Box
                  display={{ lg: "none", base: "flex" }}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  gap={"3px"}
                  cursor={"pointer"}
                  onClick={onOpen}
                >
                  <Heading color={"black.100"} variant={"p10"}>
                    Note{" "}
                  </Heading>
                  {/* <Image width={"20px"} src={black_arrow_down.src} /> */}
                  <BiNotepad
                    fontSize={{ md: "22px", base: "17px" }}
                    fill="black.100"
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        <Box mt={"20px"}>
          <Box>
            <Heading mb="13px" color={"blue.500"} variant={"p7"}>
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
            <Heading color={"blue.500"} variant={"p7"}>
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
              color={"blue.500"}
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
              color={"blue.500"}
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
              color={"blue.500"}
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
                Certificate Verification ID: 2f8ae5bfaa4c46dc3bba77655130f32a
              </Heading>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SelectedCandidateCard;
