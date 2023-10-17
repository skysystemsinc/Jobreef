import { Box } from "@chakra-ui/react";
import React from "react";
import CheckBoxDropDown from "../CheckBoxDropDown/CheckBoxDropDown";

const MobileSortBy = () => {
  const listItme = ["Date Applied", "Relevance"];
  const listItme2 = ["New", "Read", "Interviewing", "Closed"];
  const listItme3 = ["Masters Degree or Higher", "Bachelor’s Degree or Higher", "Associate Degree or Higher", "Closed"];
  const listItme4 = ["Associate Degree or Higher", "System Architecture", "Product Design", "Leadership"];
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
      <CheckBoxDropDown listItme={listItme3} label="Education" />
      <CheckBoxDropDown listItme={listItme3} label="Skills" />
    </Box>
  );
};

export default MobileSortBy;
