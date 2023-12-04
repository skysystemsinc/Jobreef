import { Box, Image } from "@chakra-ui/react";
import React from "react";
import DropDown from "../DropDown/DropDown";
import blue_arrow_down from "@/assets/Images/blue-arrow-down.svg";

const CandidatesDropdown = () => {
  return (
    <Box display={{ md: "none", base: "flex" }} justifyContent={"flex-end"}>
      <DropDown
        defaultDropdown
        style={{ width: "max-content" }}
        icon={<Image  src={blue_arrow_down.src} />}
        placeholder={"Systems Engineer"}
        variant={"bg-dropdown"}
      />
    </Box>
  );
};

export default CandidatesDropdown;
