import { Box, Button } from "@chakra-ui/react";
import React from "react";

const CompanyButton = () => {
  return (
    <Box
      width={"100%"}
      display={{ md: "none", base: "flex" }}
      justifyContent={"flex-end !important"}
      mb={"12px"}
    >
      <Button variant={"blue-btn"}>Create Company</Button>
    </Box>
  );
};

export default CompanyButton;
