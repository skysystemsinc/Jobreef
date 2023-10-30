import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { FaTimes } from 'react-icons/fa';

const ComponentMyChip = ({style, label, children }) => {
  return (
    <Box
      p={"4px 10px 4px 10px"}
      borderRadius={"5px"}
      background="rgba(44, 165, 195, 0.10)"
      display={"inline-flex"}  
      alignItems={"center"}   
      sx={style}
    >
      <Heading fontSize={"12px"} color={"gray.text"} variant={"p9"}>
          {label}
      </Heading>
      {children}
    </Box>
  );
};

export default ComponentMyChip;
