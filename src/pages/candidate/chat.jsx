import BottomWaveImage from "@/Components/BottomWaveImage/BottomWaveImage";
import ChatBox from "@/Components/ChatBox/ChatBox";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const messages = () => {
  return (
    <>
      <Header candidate/>
      
      <Box p={{ lg: "40px 70px", base: "20px 20px" }}>
        <ChatBox disableEdit />
      </Box>
      <Footer waveImage />

    </>
  );
};

export default messages;
