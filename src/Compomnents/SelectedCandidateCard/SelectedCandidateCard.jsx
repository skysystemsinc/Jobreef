import React from "react";
import profile_icon from "@/assets/Images/profile_icon.svg";
import { Box, Heading, Image } from "@chakra-ui/react";
import star from "@/assets/Images/star.svg";
import Star from "../Stars/Star";
import black_email from "@/assets/Images/black_email.svg";
import black_arrow_left from "@/assets/Images/black_arrow_left.svg";
import { GoDotFill } from "react-icons/go";
const SelectedCandidateCard = () => {
  return (
    <Box
      bg={"white.100"}
      borderRadius={"8px"}

      
      border={"1px solid red"}
      borderColor={"gray.light"}

      p={"20px 30px"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        borderBottom={"1px solid"}
        borderColor={"gray.light"}
        pb={"7px"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
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
              margin={"4px 0px 4px 0px"}
              fontWeight={400}
              color={"gray.text"}
              as={"p"}
              variant={"p4"}
            >
              Nassau, The Bahamas
            </Heading>
            <Box>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Star star={[1, 2, 3, 4, 5]} />
                <Box width={"2px"} height={"24px"} bg={"gray.light"} />
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
        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
          <Box display={"flex"} alignItems={"center"} gap={"3px"}>
            <Image src={black_arrow_left.src} />
            <Heading color={"black.100"} variant={"p10"}>
              Return
            </Heading>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"7px"}>
            <Image src={black_email.src} />
            <Heading color={"black.100"} variant={"p10"}>
              Invite to Apply
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box mt="20px">
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
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Heading>
          <Heading color={"gray.text"} variant={"p7"}>
            Work Experience
          </Heading>
          <Box
            mt={"31px"}
            mb={{ md: "10px", base: "3px" }}
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
          <Heading fontWeight={400} color={"gray.text"} as={"p"} variant={"p4"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Heading>
          <Box
            mt={"19px"}
            mb={{ md: "8px", base: "3px" }}
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
          <Heading fontWeight={400} color={"gray.text"} as={"p"} variant={"p4"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Heading>

          <Heading mt={"25px"} color={"gray.text"} variant={"p7"}>
            Education History
          </Heading>
          <Box
            mt={"21px"}
            mb={{ md: "10px", base: "3px" }}
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
          <Heading fontWeight={400} color={"gray.text"} as={"p"} variant={"p4"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectedCandidateCard;
