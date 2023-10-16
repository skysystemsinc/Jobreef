import { Button, Image } from "@chakra-ui/react";
import React from "react";

const IconButton = ({ iconSize,  variant, icon, btnLabel, handleEvent }) => {
  
  return (
    <Button
      onClick={handleEvent}
      // variant={"blue-btn"}
      display={"flex"}
      alignItems={"center"}
      variant={variant}
      gap={"7px"}
    >
      <Image mt={"3px"} src={icon.src} width= {iconSize} />
      {btnLabel}
    </Button>
  );
};

export default IconButton;
