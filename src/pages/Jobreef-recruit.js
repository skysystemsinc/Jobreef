import ContactForm from "@/Compomnents/ContactForm/ContactForm";
import ContactUs from "@/Compomnents/ContactUs/ContactUs";
import FindTalentHere from "@/Compomnents/FindTalentHere/FindTalentHere";
import Footer from "@/Compomnents/Footer/Footer";
import Header from "@/Compomnents/Header/Header";

import JobRecruitHero from "@/Compomnents/JobRecruitHero/JobRecruitHero";
import JobreefRecruit from "@/Compomnents/JobreefRecruit/JobreefRecruit";
import Features from "@/Compomnents/JobreefRecruitComp/Features";
import HowItWork from "@/Compomnents/JobreefRecruitComp/HowitWorks";
import PricingPlans from "@/Compomnents/JobreefRecruitComp/PricingPlans";

import Pricing from "@/Compomnents/Pricing/Pricing";
import TopCompanies from "@/Compomnents/TopCompanies/TopCompanies";

import { Box } from "@chakra-ui/react";
import React from "react";

const index = () => {
  return (
    <>
      <Header notLogin />
      <JobRecruitHero />
      <HowItWork />
      <Features />
      <PricingPlans />
      <JobreefRecruit
        title={"Find Your Next Hire With Jobreef Listings"}
        content={
          "Sponsor a job post on Jobreef and gain access to a suite of advanced hiring tools."
        }
        amount={"$6.99/day"}
        btnLabel={"Learn More"}

        disableTarget
        boxStyle={{
          backgroundColor: "yellow.100",
          h2: {
            color: "gray.text",
          },
          button: {
            backgroundColor: "blue.500",
            color: "white.100",
          },
        }}
      />
      <Box mb={"40px"}>
        <TopCompanies />
      </Box>
      <ContactForm
        style={{ mb: "150px", backgroundColor:'transparent', button:{
          backgroundColor:'yellow.100',
          color:'gray.text'
        } }}
        smallText={"Together"}
        label={"Let’s Work "}
      />
      <Footer />
    </>
  );
};

export default index;
