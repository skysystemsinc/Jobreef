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
      <SeekerTextBox
        title={"Improve Your Prospects"}
        subTitle={
          "Use our suite of jobseeker tools and resources to take your career to the next level!"
        }
      />
      <Advices />
      <Box mb={"50px"}>
        <NewsLetter />
      </Box>
      <Footer />
    </>
  );
};

export default jobseeker;
