import { Button, Image } from "@chakra-ui/react";
import React from "react";

const IconButton = ({ icon, btnLabel, handleEvent }) => {
  
  return (
    <Button
      onClick={handleEvent}
      variant={"blue-btn"}
      display={"flex"}
      alignItems={"center"}
      gap={"7px"}
    >
      <Image mt={"3px"} src={icon.src} width={"18px"} />
      {btnLabel}
    </Button>
  );
};

export default IconButton;
