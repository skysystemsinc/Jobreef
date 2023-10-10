import { Image } from "@chakra-ui/react";
import React from "react";
import waves from "@/assets/Images/waves.svg";

const BottomWaveImage = () => {
  return (
    <Image
      src={waves.src}
      position={"absolute"}
      bottom={"0px"}
      left={"0px"}
      width={"100%"}
    />
  );
};

export default BottomWaveImage;
