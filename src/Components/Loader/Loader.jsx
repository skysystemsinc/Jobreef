import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = ({style}) => {
  return (
    <Spinner
      thickness="2px"
      speed="0.75s"
      // emptyColor="gray.200"
      color="white.100"
      size="md"
      sx={style}
    />
  );
};

export default Loader;
