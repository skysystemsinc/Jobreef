import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const NotePad = () => {
  return (
    <Box
      padding={"20px"}
      border={"1px solid red"}
      height={"400px"}
      borderColor={"gray.light"}
      borderRadius={"8px"}
    >
      <Box borderBottom={"1px solid "} borderColor={"gray.light"} pb={"17px"}>
        <Heading color={"gray.text"} variant={"p7"}>
          {" "}
          Notepad
        </Heading>
      </Box>
      <Box mt={"20px"}  p={"20px"} borderRadius={"8px"} bg={"rgba(44, 165, 195, 0.10)"}>
        <Heading variant={"p4"}>
          Interviewed candidate on the 15th and was very impressed by
          experience. Salary ask is within range as well. Author: Jacob Jones
        </Heading>
        <Heading mt={"20px"} variant={"p4"}>
          Author: Jacob Jonees
        </Heading>
      </Box>
    </Box>
  );
};

export default NotePad;
