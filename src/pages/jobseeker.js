import Advices from "@/Components/Advices/Advices";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import NewsLetter from "@/Components/NewsLetter/NewsLetter";
import SeekerTextBox from "@/Components/SeekerTextBox/SeekerTextBox";
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
