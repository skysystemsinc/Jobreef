import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import location from "../../assets/Images/location.svg";

const SearchBox = () => {
  return (
    <Flex
      gap={ { md:"30px", base:"10px"}}
      //   flexWrap={"wrap"}

      mb="20px"
      mr={"30px"}
      flexDirection={{md:"row", base:"column"}}
      alignItems="center" // Center the items vertically
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="black" />}
        />
        <Input
          type="text"
          variant="bg-input"
          placeholder="Search for Experience, skills, and Keywords"
        //   _placeholder={{ color: "rgba(0, 0, 0, 0.6)",
        //   fontSize: "13px",
        
        // }}
          
          marginRight="2"
          bg={"gray.200"}
        />
      </InputGroup>

      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <Image width={"18px"} src={location.src} />
          }
        />
        <Input
          type="text"
          variant="bg-input"
          placeholder="Search by Location e.g. “remote”"
        //   _placeholder={{ color: "rgba(0, 0, 0, 0.6)",
        //   fontSize: "13px",

        //  }}
          marginRight="2"
        />
      </InputGroup>

      <Button
        sx={{ padding: "20px 60px 20px 60px" }}
        variant="blue-btn"
        marginLeft="2" // Add margin to the button for space
      >
        Search Now
      </Button>
    </Flex>
  );
};

export default SearchBox;
