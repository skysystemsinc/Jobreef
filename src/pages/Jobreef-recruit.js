import ContactForm from "@/Components/ContactForm/ContactForm";
import ContactUs from "@/Components/ContactUs/ContactUs";
import FindTalentHere from "@/Components/FindTalentHere/FindTalentHere";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";

import JobRecruitHero from "@/Components/JobRecruitHero/JobRecruitHero";
import JobreefRecruit from "@/Components/JobreefRecruit/JobreefRecruit";
import Features from "@/Components/JobreefRecruitComp/Features";
import HowItWork from "@/Components/JobreefRecruitComp/HowitWorks";
import PricingPlans from "@/Components/JobreefRecruitComp/PricingPlans";

import Pricing from "@/Components/Pricing/Pricing";
import TopCompanies from "@/Components/TopCompanies/TopCompanies";

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
