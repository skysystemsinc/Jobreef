import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
} from "@chakra-ui/react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import React from "react";
import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";
import location from "../../assets/Images/location.svg";

const JobSearchData = ({
  searchEntryForCompany,
  SearchEntryForLocation,
  SearchNow,
}) => {
  return (
    <>
      <Box
        mt={{ md: "50px", lg: "60px", base: "20px" }}
        width={{ md: "70%", sm: "100%" }}
        margin="0 auto" // Center the container horizontally
      >
        <Flex
          display={{ lg: "flex", base: "none" }}
          mt={"0px"}
          alignItems="center" // Center the items vertically
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="black" />}
            />
            <Input
              color={"black"}
              type="text"
              variant="filled"
              placeholder="Search for Jobs Companies and Keywords"
              marginRight="2"
              onChange={(e) => searchEntryForCompany(e.target.value)}
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
              variant="filled"
              placeholder="Search By Location e.g remote"
              marginRight="2"
              bg={"gray.200"}
              onChange={(e) => SearchEntryForLocation(e.target.value)}
            />
          </InputGroup>

          <Button
            onClick={SearchNow}
            style={{ padding: "20px 40px 20px 40px" }}
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
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="black" />}
            />
            <Input
              color="black"
              type="text"
              variant="filled"
              placeholder="Search for Jobs Companies and Keywords"
              marginRight="2"
              onChange={(e) => searchEntryForCompany(e.target.value)}
              bg="gray.200"
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
              color="black"
              type="text"
              variant="filled"
              placeholder="Search By Location e.g remote"
              marginRight="2"
              bg="gray.200"
              onChange={(e) => SearchEntryForLocation(e.target.value)}
            />
          </InputGroup>

          <Button
            onClick={SearchNow}
            style={{ padding: "20px 40px" }}
            variant="blue-btn"
          >
            Search Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default JobSearchData;
