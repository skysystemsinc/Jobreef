import Advices from "@/Compomnents/Advices/Advices";
import Footer from "@/Compomnents/Footer/Footer";
import Header from "@/Compomnents/Header/Header";
import NewsLetter from "@/Compomnents/NewsLetter/NewsLetter";
import SeekerTextBox from "@/Compomnents/SeekerTextBox/SeekerTextBox";
import { Box } from "@chakra-ui/react";
import React from "react";

const jobseeker = () => {
  return (
    <>
      <Header notLogin />
      <SeekerTextBox />
      <Advices />
      <Box mb={"50px"}>
        <NewsLetter />
      </Box>
      <Footer />
    </>
  );
};

export default jobseeker;
