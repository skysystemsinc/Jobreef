import React from "react";
import { Box, Button, Heading, Flex, Input } from "@chakra-ui/react";
const PlanCard = ({ data, handleAdd, noActiveSub }) => {
  return (
    <Box
      border={"1px solid"}
      borderColor={"gray.400"}
      borderRadius="8px"
      p={{ md: "20px 30px 25px 30px", base:"15px 10px 18px 10px"}}
      boxShadow={" 0px 4px 20px 0px rgba(0, 0, 0, 0.05)"}
      bg={"white.100"}
      display="flex"
      justifyContent="space-between"
    //   alignItems="center"
      mb={"30px"}
    //   flexWrap={"wrap"}
    flexDirection={{sm:"row", base:'column'}}
    alignItems={{sm:"center", base:'flex-start'}}

    >
      <Box>
        <Heading color={"gray.text"} fontWeight={600} variant={"p7"}>
          {data.title}
        </Heading>
        <Heading fontWeight={400} color={"gray.text"} variant={"p7"}>
          {data.content}
        </Heading>
      </Box>
      <Box mt={"13px"}>
        <Button
          onClick={handleAdd}
          //   width={"max-content"}
          //   px={"20px"}

          variant={"outline-blue"}
        >
          {" "}
          {data.active ? "Deactivate" : "Activate"}
        </Button>
      </Box>
    </Box>
  );
};

export default PlanCard;
