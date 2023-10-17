import React from "react";
import startIcon from "@/assets/Images/Star.svg";
import { Box, Image } from "@chakra-ui/react";

const Star = ({ star, width }) => {
  return (
    <Box display={"flex"} gap={"3px"} alignItems={"center"}>
      {star?.map((item) => {
        return (
          <Image
            width={width ? width : { md: "22px", base: "17px" }}
            src={startIcon.src}
          />
        );
      })}
    </Box>
  );
};

export default Star;
