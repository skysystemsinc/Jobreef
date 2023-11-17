import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Spinner
      thickness="2px"
      speed="0.75s"
      // emptyColor="gray.200"
      color="white.100"
      size="md"
    />
  );
};

export default Loader;
