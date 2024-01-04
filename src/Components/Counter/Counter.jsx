import { Box } from "@chakra-ui/react";
import React from "react";
import CounterBox from "../CounterBox/CounterBox";
import jobCounter from "@/assets/Images/jobCounter.svg";
import companyCounter from "@/assets/Images/companyCounter.svg";
import candidateCounter from "@/assets/Images/candidateCounter.svg";

const Counter = () => {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"center"}
      py={"40px"}
      gap={{ md: "120px", base: "30px" }}
    >
      <CounterBox icon={jobCounter.src} name={"Jobs"} counterVal={"20223"} />
      <CounterBox
        icon={companyCounter.src}
        name={"Companies"}
        counterVal={"804"}
      />
      <CounterBox
        icon={candidateCounter.src}
        name={"Candidates"}
        counterVal={"500"}
      />
    </Box>
  );
};

export default Counter;
