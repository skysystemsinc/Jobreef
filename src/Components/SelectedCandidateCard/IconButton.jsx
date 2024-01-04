import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const IconButton = ({ item }) => {
  return (
    <Box
      onClick={() => item.handleEvent(selectedCandidates)}
      border={"1px solid"}
      borderColor={"white.100"}
      display={"flex"}
      borderRadius={{ md: "10px", base:"7px"}}
      role="group"
      alignItems={"center"}
      my={"10px"}
      gap={"5px"}
      bg={"white.100"}
      padding={{ md: "15px 30px", base: "12px 10px" }}
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
          transition: ".4s",
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
        fontSize={{md:"14px", base:"11px"}}
      >
        {item.name}
      </Heading>

      <Box color={"black.100"} fontSize={{ md: "16px", base: "12px" }}>
        {item.icon}
      </Box>
    </Box>
  );
};

export default IconButton;
