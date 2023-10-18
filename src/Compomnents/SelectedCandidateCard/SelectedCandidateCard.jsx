import React, { useState } from "react";
import profile_icon from "@/assets/Images/profile_icon.svg";
import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import star from "@/assets/Images/star.svg";
import Star from "../Stars/Star";
import black_email from "@/assets/Images/black_email.svg";
import black_arrow_left from "@/assets/Images/black_arrow_left.svg";
import black_arrow_down from "@/assets/Images/black-arrow-down.svg";
import download from "@/assets/Images/download.svg";
import { GoDotFill } from "react-icons/go";
import NotePadModal from "../NotePadModal/NotePadModal";
import { BiNotepad } from "react-icons/bi";

const SelectedCandidateCard = ({ matchCandidate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NotePadModal open={isOpen} onClose={onClose} />
      <Box
        bg={"white.100"}
        borderRadius={"8px"}
        border={"1px solid "}
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
          borderColor={"gray.light"}
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
              width={"65px"}
              height={"65px"}
              objectFit={"cover"}
              src={profile_icon.src}
            />
            <Box>
              <Heading color={"gray.text"} as={"p"} variant={"p7"}>
                Erin James
              </Heading>

              <Heading
                margin={{ md: "4px 0px", base: "0px 0px" }}
                fontWeight={400}
                color={"gray.text"}
                as={"p"}
                variant={"p4"}
              >
                Nassau, The Bahamas
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
                    height={{ md: "24px", base: "17px" }}
                    mt={{ md: "0px", base: "2px" }}
                    bg={"gray.light"}
                  />
                  <Heading
                    fontWeight={400}
                    color={"gray.text"}
                    as={"p"}
                    variant={"p4"}
                  >
                    Applied On: 17/09/2023
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
            <Box display={"flex"} alignItems={"center"} gap={"10px"} flexWrap={"wrap"}>
              <Box display={"flex"} alignItems={"center"} gap={"3px"}>
                <Image
                  src={black_arrow_left.src}
                  width={{ md: "24px", base: "20px" }}
                />
                <Heading color={"black.100"} variant={"p10"}>
                  Return
                </Heading>
              </Box>
              {matchCandidate ? (
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Image src={black_email.src} />
                  <Heading color={"black.100"} variant={"p10"}>
                    Invite to Apply
                  </Heading>
                </Box>
              ) : (
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Image src={black_email.src} />
                  <Heading color={"black.100"} variant={"p10"}>
                    Send Message
                  </Heading>
                </Box>
              )}

              {matchCandidate ? null : (
                <Box display={"flex"} alignItems={"center"} gap={"7px"}>
                  <Image src={download.src} />
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
                mt={{ md: "10px", base: "6px" }}
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
                  <Image width={"20px"} src={black_arrow_down.src} />
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
                  <BiNotepad fontSize={"22px"} fill="black.100" />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
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
              <Heading fontWeight={600} color={"gray.text"} variant={"p4"}>
                Systems Engineer
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>

              <Heading fontWeight={600} color={"gray.text"} variant={"p4"}>
                ABC Insurance
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>

              <Heading fontWeight={600} color={"gray.text"} variant={"p4"}>
                {"04/2017 - Present"}
              </Heading>
            </Box>
            <Heading
              fontWeight={400}
              color={"gray.text"}
              as={"p"}
              variant={"p4"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
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
              <Heading fontWeight={600} color={"gray.text"} variant={"p4"}>
                Systems Engineer
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>

              <Heading fontWeight={600} color={"gray.text"} variant={"p4"}>
                ABC Insurance
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>

              <Heading fontWeight={600} color={"gray.text"} variant={"p4"}>
                {"04/2017 - Present"}
              </Heading>
            </Box>
            <Heading
              fontWeight={400}
              color={"gray.text"}
              as={"p"}
              variant={"p4"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
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
              <Heading fontWeight={600} color={"gray.text"} variant={"p4"}>
                Bachelor’s Degree, Information Security
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>

              <Heading fontWeight={600} color={"gray.text"} variant={"p4"}>
                University of The Bahamas
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>

              <Heading fontWeight={600} color={"gray.text"} variant={"p4"}>
                Currently Enrolled
              </Heading>
            </Box>
            <Heading
              fontWeight={400}
              color={"gray.text"}
              as={"p"}
              variant={"p4"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Heading>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SelectedCandidateCard;