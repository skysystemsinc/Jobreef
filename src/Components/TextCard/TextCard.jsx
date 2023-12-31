import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const TextCard = ({ addHandle, title, subittle, btnLable }) => {
  return (
    <Box
      minH={"50vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      flexDirection={"column"}
    >
      <Heading variant={"p8"}>
        {title}
        <Text fontWeight={700}>{subittle}</Text>
      </Heading>
      <Button
        onClick={addHandle}
        width="max-content"
        px={{ md: "25px", base: "14px" }}
        mt={{ md: "25px", base: "20px" }}
        variant={"blue-btn"}
      >
        {btnLable}
      </Button>
    </Box>
  );
};

export default TextCard;
