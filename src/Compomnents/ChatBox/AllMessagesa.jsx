import globalStyles from "@/styles/globalStyles";
import { Box } from "@chakra-ui/react";
import React from "react";
import LeftTextBox from "./LeftTextBox";
import RightTextBox from "./RightTextBox";
import Date from "./Date";
import { useSelector } from "react-redux";

const AllMessages = () => {
  const activeConversation = useSelector((state) => state.chat.value.active);

  return (
    <Box
      my={"20px"}
      sx={globalStyles.scrollBar}
      height={"400px"}
      position={"relative"}
      // border={"1px solid red"}
    >
      <Box 
      overflowY={"scroll"}
      sx={globalStyles.scrollBar}

       maxHeight={"400px"} position={"absolute"} width={"100%"} bottom={"0px"}>
        {activeConversation.messages?.map((item) => {
          if (item.sender) {
            return (
              <Box display={"flex"} justifyContent={"flex-end"}>
                <RightTextBox data={item} />
              </Box>
            );
          } else {
            return <LeftTextBox data={item} />;
          }
        })}
        {/* <Box></Box>
        <Date data={"Today"} />
        <Box display={"flex"} justifyContent={"flex-end"}>
          <RightTextBox />
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <RightTextBox />
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <RightTextBox />
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <RightTextBox />
        </Box> */}
      </Box>
    </Box>
  );
};

export default AllMessages;
