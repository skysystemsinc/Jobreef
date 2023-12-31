import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import React, { useContext, useState } from "react";
import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";
import location from "../../assets/Images/location.svg";
import { Role_context } from "../../context/context";
import { FaFilter } from "react-icons/fa";

const JobSearchData = ({ setIsOpen }) => {
  const {
    company,
    setCompany,
    searchNow,
    setHandleCompanyEntry,
    getHandleCompanyEntry,
    setHandleLocationEntry,
    getHandleLocationEntry,
    getToggle,
  } = useContext(Role_context);

  return (
    <>
      <Box
        width={{ md: "70%", sm: "100%" }}
        margin="0 auto" // Center the container horizontally
        pt={{ md: "30px", lg: "40px", base: "20px" }}
      >
        <Flex
          display={{ lg: "flex", base: "none" }}
          mt={"0px"}
          alignItems="center" // Center the items vertically
          gap={"10px"}
        >
          <InputGroup
            bg={"blue.200"}
            borderRadius={"7px"}
            border={"1px solid lightgray"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            px={"10px"}
          >
            <InputLeftElement
              pointerEvents="none"
              children={
                <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
                  What
                </Heading>
              }
              mx={"10px"}
            />
            <Input
              ml={"10px"}
              variant="bg-input"
              // color={"black"}
              // type="text"
              placeholder="Job title, keywords, or company"
              // _placeholder={{ color: "rgba(0, 0, 0, 0.6)" }}
              borderRadius={"7px"}
              // bg={"gray.200"}
              bg={"transparent"}
              marginRight="2"
              onChange={(e) => setHandleCompanyEntry(e.target.value)}
            />
            <InputRightElement
              pointerEvents="none"
              children={<FiSearch color="black" />}
            />
          </InputGroup>

          <InputGroup
            bg={"blue.200"}
            borderRadius={"7px"}
            border={"1px solid lightgray"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            px={"10px"}
          >
            <InputLeftElement
              pointerEvents="none"
              children={
                <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
                  Where
                </Heading>
              }
              mx={"10px"}
            />
            <Input
              ml={"15px"}
              borderRadius={"7px"}
              variant="bg-input"
              // color={"black"}
              bg={"transparent"}
              // type="text"
              placeholder="Search by Location e.g. “remote”"
              // _placeholder={{ color: "rgba(0, 0, 0, 0.6)" }}
              // marginRight="2"
              // bg={"gray.200"}
              onChange={(e) => setHandleLocationEntry(e.target.value)}
            />
            <InputRightElement
              pointerEvents="none"
              children={
                <Image
                  width={{ md: "20px", base: "20px" }}
                  src={location.src}
                />
              }
            />
          </InputGroup>

          <Button
            onClick={searchNow}
            sx={{ padding: "20px 60px 20px 60px" }}
            variant="blue-btn"
            marginLeft="2" // Add margin to the button for space
          >
            Search Now
          </Button>
        </Flex>

        <Box
          display={{ lg: "none", base: "flex" }}
          flexDirection="column"
          justifyContent="center" // Center vertically
          alignItems="center" // Center horizontally
          rowGap={1}
          mb={"20px"}
        >
          <InputGroup
            bg={"blue.200"}
            borderRadius={"6px"}
            border={"1px solid lightgray"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            px={"10px"}
          >
            <InputLeftElement
              pointerEvents="none"
              children={
                <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
                  What
                </Heading>
              }
              mx={"10px"}
            />
            <Input
              ml={"10px"}
              color={"black"}
              type="text"
              variant="bg-input"
              placeholder="Job title, keywords, or company"
              _placeholder={{ color: "rgba(0, 0, 0, 0.6)" }}
              marginRight="2"
              onChange={(e) => setHandleCompanyEntry(e.target.value)}
              bg={"gray.200"}
            />
            <InputRightElement
              pointerEvents="none"
              children={<FiSearch color="black" />}
            />
          </InputGroup>
          <InputGroup
            bg={"blue.200"}
            borderRadius={"6px"}
            border={"1px solid lightgray"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            px={"10px"}
          >
            <InputLeftElement
              pointerEvents="none"
              children={
                <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
                  Where
                </Heading>
              }
              mx={"10px"}
            />
            <Input
              ml={"15px"}
              color={"black"}
              type="text"
              variant="bg-input"
              placeholder="Search by Location e.g. “remote”"
              _placeholder={{ color: "rgba(0, 0, 0, 0.6)" }}
              marginRight="2"
              bg={"gray.200"}
              onChange={(e) => setHandleLocationEntry(e.target.value)}
            />
            <InputRightElement
              pointerEvents="none"
              children={
                <Image
                  width={{ md: "20px", base: "20px" }}
                  src={location.src}
                />
              }
            />
          </InputGroup>

          <Flex justifyContent="space-between" alignItems="center" mt={"20px"}>
            <Button
              onClick={searchNow}
              sx={{ padding: "20px 40px" }}
              variant="blue-btn"
              margin="2" // Add margin to the button for space
              marginTop={2}
            >
              Search Now
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default JobSearchData;
