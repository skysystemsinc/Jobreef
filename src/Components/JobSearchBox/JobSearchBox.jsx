import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import blueEmail from "@/assets/Images/blueEmail.svg";
import blueLocation from "@/assets/Images/blueLocation.png";
import save from "@/assets/Images/save.svg";
import IconTextArea from "./IconTextArea";
import { IoIosSearch } from "react-icons/io";
import Chip from "../Chip/Chip";
const JobSearchBox = () => {
  return (
    <Box
      display={"flex"}
      gap={{ xl: "30px", base: "20px" }}
      flexDirection={{ xl: "row", base: "column" }}
      alignItems={"center"}
      p={{ md: "14px 35px 16px 25px",base: "4px 15px 16px 15px"}}
      borderRadius={"5px"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.16)"}
      position={"relative"}
      top={"0px"}
      zIndex={2}
      width={{ xl: "max-content", base: "100%" }}
      bg={"white.100"}
    >
      <Box width={{ lg: "auto", base: "100%" }}>
        <Box>
          <Box
            mt={"14px"}
            mb="23px"
            display={"flex"}
            gap={{ lg: "0px", base: "12px" }}
            // flexWrap={"wrap"}
            flexDirection={{ lg: "row", base: "column" }}
            alignItems={"center"}
          >
            {/* <Box width={"100%"}> */}
            <IconTextArea
              placeholder={"Search for jobs, companies or keywords"}
              icon={blueEmail}
            />
            {/* </Box> */}

            {/* <Box width={"100%"}> */}
            <IconTextArea
              placeholder={"Search by city, country, or remote"}
              icon={blueLocation}
            />
            {/* </Box> */}

            <Button
              height={{ md: "47px", base:'40px'}}
              px={{ md: "45px", base:"25px"}}
              fontWeight={500}
              boxShadow={"none"}
              width={"max-content"}
              leftIcon={<IoIosSearch fontSize={"19px"} />}
              variant={"blue-btn"}
            >
              Search
            </Button>
          </Box>

          <Box></Box>
        </Box>
        <Box display={"flex"} flexWrap={"wrap"} gap={"7px"} alignItems={"center"}>
          <Image src={save.src} />
          <Heading
            className="sora"
            color={"gray.text"}
            fontWeight={700}
            variant="p4"
          >
            Suggested Search:
          </Heading>
          <Chip label={"Senior backend developer"} />
          <Chip label={" Human Resource "} />
          <Chip label={"UI/UX Designer"} />
          <Chip label={"Front desk"} />
        </Box>
      </Box>
      <Box
        m={"0px 6px 0px 36px"}
        height={"117px"}
        backgroundColor={"gray.400"}
        width={"1px"}
        display={{ xl: "block", base: "none" }}
      />
      <Box
        // m={"0px 6px 0px 36px"}
        height={"1px"}
        backgroundColor={"gray.400"}
        width={"100%"}
        display={{ xl: "none", base: "block" }}
      />
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Heading color={"black.100"} className="sora" mb={{ sm: "20px", base:"12px"}} variant={"p11"}>
          Hiring? Post a Free Job
        </Heading>
        <Button fontWeight={600} variant={"blue-btn"} width={{ sm: "189px" , base:"130px"}} >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default JobSearchBox;
