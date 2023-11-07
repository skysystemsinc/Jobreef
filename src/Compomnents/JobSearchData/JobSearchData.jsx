import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
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
          boxShadow={" 0px 4px 0px 0px rgba(0, 0, 0, 0.15)"}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="black" />}
            />
            <Input
              color={"black"}
              type="text"
              variant="bg-input"
              placeholder="Search for Jobs, Companies, and Keywords"
              _placeholder={{ color: "rgba(0, 0, 0, 0.6)" }}
              marginRight="2"
              onChange={(e) => setHandleCompanyEntry(e.target.value)}
              bg={"gray.200"}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <Image
                  width={{ md: "20px", base: "20px" }}
                  src={location.src}
                />
              }
            />
            <Input
              color={"black"}
              type="text"
              variant="bg-input"
              placeholder="Search by Location e.g. “remote”"
              _placeholder={{ color: "rgba(0, 0, 0, 0.6)" }}
              marginRight="2"
              bg={"gray.200"}
              onChange={(e) => setHandleLocationEntry(e.target.value)}
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
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="black" />}
            />
            <Input
              color={"black"}
              type="text"
              variant="bg-input"
              placeholder="Search for Jobs Companies and Keywords"
              marginRight="2"
              onChange={(e) => setHandleCompanyEntry(e.target.value)}
              bg={"gray.200"}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={
                <Image
                  width={{ md: "20px", base: "20px" }}
                  src={location.src}
                />
              }
            />
            <Input
              color={"black"}
              type="text"
              variant="bg-input"
              placeholder="Search By Location e.g remote"
              marginRight="2"
              bg={"gray.200"}
              onChange={(e) => setHandleLocationEntry(e.target.value)}
            />
          </InputGroup>
          <Flex justifyContent="space-between" alignItems="center" mt={'20px'}>
            <Button
              onClick={searchNow}
              sx={{ padding: "20px 40px" }}
              variant="blue-btn"
              margin="2" // Add margin to the button for space
              marginTop={2}
            >
              Search Now
            </Button>
            <Box display={{ lg: "none", md: "none", sm: "none" }}>
              {!getToggle()?(<Button
                onClick={() => {
                  setIsOpen(true);
                }}
                sx={{
                  padding: "20px 40px",
                  display: "flex",
                  alignItems: "center",
                }}
                variant="blue-btn"
                margin="2"
              >
                <Icon as={FaFilter} w={3} h={3} marginRight="2" />
                Filters
              </Button>):null}
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default JobSearchData;
