import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
  } from "@chakra-ui/react";
  import { FiSearch, FiMapPin } from "react-icons/fi";
  import React from "react";
  import BottomWaveImage from "../BottomWaveImage/BottomWaveImage";
  
  const JobSearchData = () => {
    return (
      <>
        <Box
          mt={{ md: "50px", lg: "60px", base: "20px" }}
          width={{ md: "70%", sm: "100%" }}
          margin="0 auto"  // Center the container horizontally
        >
          <Flex
            mt={"0px"}
            alignItems="center"  // Center the items vertically
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiSearch color="gray.100" />}
              />
              <Input
                type="text"
                variant="filled"
                placeholder="Search for Jobs Companies and Keywords"
                marginRight="2"
              />
            </InputGroup>
  
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiMapPin color="gray.100" />}
              />
              <Input
                type="number"
                variant="filled"
                placeholder="Search By Location e.g remote"
                marginRight="2"
                bg={"gray.100"}
              />
            </InputGroup>
  
            <Button
              onClick={() => {
                // Handle the button click event
                // router.push("/");
              }}
              style={{padding:"20px 40px 20px 40px"}}
              variant="blue-btn"
              marginLeft="2"  // Add margin to the button for space
            >
              Search Now
            </Button>
          </Flex>
        </Box>
        <Box style={{ marginTop: 100}}>
            <Heading
            variant={"h1"}
            textAlign={"end"}
            gap={"23px"}
            mb={{ "2xl": "30px", base: "16px" }}
            color={"gray.400"}
            fontSize={40}
            >
                Inspire Careers
            </Heading>
            <Heading
            variant={"h1"}
            textAlign={"end"}
            gap={"23px"}
            mb={{ "2xl": "30px", base: "16px" }}
            color={"gray.700"}
            letterSpacing={-1}
            fontSize={50}
            >
                Unite Opportunities
            </Heading>
        </Box>      
        <BottomWaveImage />
      </>
    );
  };
  
  export default JobSearchData;
  