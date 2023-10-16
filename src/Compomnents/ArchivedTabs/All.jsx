import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SortBy from "../SortBy/SortBy";

const All = () => {
  return (
    <Box display={"flex"} gap={"10px"}>
      <CandidateCard />

      {/* <Box width={"300px"} height={"400px"} bg={"blue.500"}></Box> */}
      <SortBy/>
    </Box>
  );
};

export default All;
