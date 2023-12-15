import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Chip = ({ label, style, icon }) => {
  return (
    <Box
      width={"max-content"}
      p={"6px 10px 7px 14px"}
      borderRadius={" 5px"}
      background="rgba(44, 165, 195, 0.10)"
      display={"flex"}
      alignItems={"center"}
      gap={"10px"}
      sx={style}
    >
      {icon ? <Image width={"13px"} src={icon.src} /> : null}

      <Heading fontSize={"11px"} color={"gray.text"} variant={"p9"}>
        {label}
      </Heading>
    </Box>
  );
};

export default Chip;
