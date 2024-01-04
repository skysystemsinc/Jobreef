import Header from "@/Components/Header/Header";
import React from "react";
import { Box } from "@chakra-ui/react";
import NewsLetter from "@/Components/NewsLetter/NewsLetter";
import Footer from "@/Components/Footer/Footer";
import ContactUs from "@/Components/ContactUs/ContactUs";

const contact = () => {
  return (
    <>
      <Header notLogin />
      <ContactUs/>
      <Box mt={"30px"} mb={'50px'}>
        <NewsLetter />
      </Box>
      <Footer/>
    </>
  );
};

export default contact;
