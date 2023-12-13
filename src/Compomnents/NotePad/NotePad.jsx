import { Box, Heading, Image, Textarea } from "@chakra-ui/react";
import React from "react";
import send from "@/assets/Images/send.svg";
import deleteIcon from "@/assets/Images/delete.svg";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";
import DropDown from "../DropDown/DropDown";

const NotePad = () => {
  return (
    <Box
      padding={"20px"}
      
      height={"max-content"}
      borderColor={"white.200"}
      boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"}
      bg={"white.100"}
      borderRadius={"8px"}
    >

      {/* <Box sx={{mt:"15px"}}>
        <DropDown
          icon={<Image src={blue_arrow_down.src} />}
          placeholder={"Previous Applications"}
          variant={"bg-dropdown"}
          style={{ width: "100%" }}
        />
      </Box> */}
      <Box
        mt={"20px"}
        p={"20px"}
        borderRadius={"8px"}
        bg={"rgba(44, 165, 195, 0.10)"}
      >
        <Box
          gap={"10px"}
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <Heading variant={"p4"}>
            Interviewed candidate on the 15th and was very impressed by
            experience. Salary ask is within range as well.
          </Heading>
          <Image  cursor={"pointer"} src={deleteIcon.src} width={"12px"} mt={"7px"} />
        </Box>
        <Heading mt={"20px"} variant={"p4"}>
          Author: Jacob Jonees
        </Heading>
      </Box>

      {/* <Box height={"300px"}></Box> */}
      <Box position={"relative"} mt={"40px"}>
        <Textarea
          placeholder={"Enter notes or comments about this candidate..."}
          size="sm"
          variant={"bg-teaxtarea"}
          minHeight={"94px"}
          resize={"none"}
        />
        <Image
        cursor={"pointer"}
          src={send.src}
          position={"absolute"}
          bottom={"11px"}
          width="20px"
          right={"10px"}
        />
      </Box>
    </Box>
  );
};

export default NotePad;
