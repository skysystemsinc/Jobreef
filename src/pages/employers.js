import ContactForm from "@/Compomnents/ContactForm/ContactForm";
import ContactUs from "@/Compomnents/ContactUs/ContactUs";
import FindTalentHere from "@/Compomnents/FindTalentHere/FindTalentHere";
import Footer from "@/Compomnents/Footer/Footer";
import Header from "@/Compomnents/Header/Header";
import HowItWork from "@/Compomnents/HowItWork/HowItWork";
import JobreefRecruit from "@/Compomnents/JobreefRecruit/JobreefRecruit";
import Pricing from "@/Compomnents/Pricing/Pricing";
import TopCompanies from "@/Compomnents/TopCompanies/TopCompanies";
import Features from "@/assets/Features/Features";
import { Box } from "@chakra-ui/react";
import React from "react";

const employers = () => {
  return (
    <>
      <Header notLogin />
      <FindTalentHere />
      <Pricing />
      <JobreefRecruit />
      <HowItWork />
      <Features />
      <Box mb={"40px"}>
      <TopCompanies />
      </Box>
      <ContactForm
        style={{ mb: "150px" }}
        smallText={"Together"}
        label={"Let’s Work "}
      />
      <Footer />
    </>
  );
};

export default employers;
