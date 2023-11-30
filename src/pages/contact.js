import Header from "@/Compomnents/Header/Header";
import React from "react";
import { Box } from "@chakra-ui/react";
import NewsLetter from "@/Compomnents/NewsLetter/NewsLetter";
import Footer from "@/Compomnents/Footer/Footer";
import ContactUs from "@/Compomnents/ContactUs/ContactUs";

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
