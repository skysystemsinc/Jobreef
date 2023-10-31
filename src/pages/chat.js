import BottomWaveImage from "@/Compomnents/BottomWaveImage/BottomWaveImage";
import ChatBox from "@/Compomnents/ChatBox/ChatBox";
import Header from "@/Compomnents/Header/Header";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const messages = () => {
  return (
    <>
      <Header />
      <BottomWaveImage />
      <Box p={"40px 70px"}>
        <ChatBox />
      </Box>
      {/* // */}
    </>
  );
};

export default messages;
