import { Box, Image } from "@chakra-ui/react";
import React from "react";
import waves from "@/assets/Images/waves.svg";

const BottomWaveImage = () => {
  return (
    <Box  width={"100%"}  position={"absolute"}  bottom={"0px"} left={"0px"}>
      <Image
        src={waves.src}
        // position={"absolute"}
        // bottom={"0px"}
        // left={"0px"}
        width={"100%"}
        // border={"1px solid red"}
        
        zIndex={-1}

        // zIndex={"-1 !important"}
      />
    </Box>
  );
};

export default BottomWaveImage;
