import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { Box } from "@chakra-ui/react";
import globalStyles from "@/styles/globalStyles";
import HistoryCard from "../HistoryCard/HistoryCard";

const CandidatesHistory = () => {
  return (
    <Box
      //   bg={"white.100"}
      boxShadow={globalStyles.boxShadowV1}
      borderRadius={"0px 8px 8px 8px"}
      bg={"white.100"}
      p={{ md: "38px 38px 20px 38px", base: "25px 20px 10px 20px" }}
    >
      <HistoryCard right label={" YES"} />
      <HistoryCard label={"No"} />
    </Box>
  );
};

export default CandidatesHistory;
