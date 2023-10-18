import { Box, Heading, Image, Textarea } from "@chakra-ui/react";
import React from "react";
import send from "@/assets/Images/send.svg";
const NotePad = () => {
  return (
    <Box
      padding={"20px"}
      border={"1px solid red"}
      height={"max-content"}
      borderColor={"gray.light"}
      borderRadius={"8px"}
    >
      <Box borderBottom={"1px solid "} borderColor={"gray.light"} pb={"17px"}>
        <Heading color={"gray.text"} variant={"p7"}>
          {" "}
          Notepad
        </Heading>
      </Box>
      <Box
        mt={"20px"}
        p={"20px"}
        borderRadius={"8px"}
        bg={"rgba(44, 165, 195, 0.10)"}
      >
        <Heading variant={"p4"}>
          Interviewed candidate on the 15th and was very impressed by
          experience. Salary ask is within range as well. 
        </Heading>
        <Heading mt={"20px"} variant={"p4"}>
          Author: Jacob Jonees
        </Heading>
      </Box>

      <Box height={"300px"} ></Box>
      <Box position={"relative"}>
        <Textarea
          placeholder={"Enter notes or comments about this candidate..."}
          size="sm"
          variant={"bg-teaxtarea"}
          minHeight={"94px"}
          resize={"none"}
        />
        <Image
          src={send.src}
          position={"absolute"}
          bottom={"11px"}
          right={"10px"}
        />
      </Box>
    </Box>
  );
};

export default NotePad;
