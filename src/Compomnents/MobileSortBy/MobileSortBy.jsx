import { Box } from "@chakra-ui/react";
import React from "react";
import CheckBoxDropDown from "../CheckBoxDropDown/CheckBoxDropDown";

const MobileSortBy = () => {
  const listItme = ["Date Applied", "Relevance"];
  const listItme2 = ["New", "Read", "Interviewing", "Closed"];
  return (
    <Box
      mb={"20px"}
      flexWrap={"nowrap"}
      overflowX={"scroll"}
      display={"flex"}
      alignItems={"center"}
      gap={{ md: "20px", base: "12px" }}
    >
      <CheckBoxDropDown listItme={listItme} label="Sort Candidates By" />
      <CheckBoxDropDown listItme={listItme2} label="Status" />
      <CheckBoxDropDown label="Education" />
      <CheckBoxDropDown label="Skills" />
    </Box>
  );
};

export default MobileSortBy;
