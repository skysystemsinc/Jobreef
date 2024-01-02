import { Button, Image } from "@chakra-ui/react";
import React from "react";

const IconButton = ({ iconSize,  variant, icon, btnLabel, handleEvent, btnStyle }) => {
  
  return (
    <Button
      onClick={handleEvent}
      display={"flex"}
      alignItems={"center"}
      variant={variant}
      gap={"7px"}
      sx={btnStyle}
    >
      <Image mt={"3px"} src={icon.src} width= {iconSize} />
      {btnLabel}
    </Button>
  );
};

export default IconButton;
