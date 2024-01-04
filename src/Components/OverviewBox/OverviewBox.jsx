import globalStyles from "@/styles/globalStyles";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const OverviewBox = ({ label, data }) => {
  return (
    <Box sx={globalStyles.shadowBox} padding={{ md: "20px 30px", base:"15px 20px"}}>
      <Heading color={"black.100"} variant={"p6"}>
        {label}
      </Heading>
      <Box
        // px={"10px"}
        mt={{md: "30px", base:"15px"}}
        display={"grid"}
        gap={{ md: "30px", base:"15px"}}
        gridTemplateColumns={{
          sm: "repeat(3, 1fr)",
          base: "repeat(2, 1fr)",
      
        }}
        
    
      >
        {data.map((item) => {
          return (
            <Box textAlign={"center"}>
              <Heading variant={"h1"} fontWeight={700} color={"blue.500"}>
                {item.count}
              </Heading>
              <Heading variant={"p5"}>{item.title}</Heading>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default OverviewBox;
