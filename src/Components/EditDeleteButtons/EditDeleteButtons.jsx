import React from "react";
import edit_outline from "@/assets/Images/edit_outline.svg";
import trash from "@/assets/Images/trash.svg";
import { Box, Heading, Image } from "@chakra-ui/react";

const EditDeleteButtons = ({ handleEdit, handleDelete }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      mt={{ xl: "0px", base: "10px" }}
      justifyContent={"flex-end"}
      width={{ xl: "auto", base: "100%" }}
      gap={"20px"}
    >
      <Box
        cursor={"pointer"}
        onClick={handleEdit}
        display={"flex"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Image width={{ md: "17px", base: "16px" }} src={edit_outline.src} />
        <Heading variant={"p5"}>Edit</Heading>
      </Box>
      <Box
        onClick={handleDelete}
        cursor={"pointer"}
        display={"flex"}
        alignItems={"center"}
        gap={"5px"}
      >
        <Image width={{ md: "17px", base: "16px" }} src={trash.src} />
        <Heading variant={"p5"}>Delete</Heading>
      </Box>
    </Box>
  );
};

export default EditDeleteButtons;
