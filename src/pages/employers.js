import ContactForm from "@/Components/ContactForm/ContactForm";
import ContactUs from "@/Components/ContactUs/ContactUs";
import FindTalentHere from "@/Components/FindTalentHere/FindTalentHere";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import HowItWork from "@/Components/HowItWork/HowItWork";
import JobreefRecruit from "@/Components/JobreefRecruit/JobreefRecruit";
import Pricing from "@/Components/Pricing/Pricing";
import TopCompanies from "@/Components/TopCompanies/TopCompanies";
import Features from "@/assets/Features/Features";
import { Box } from "@chakra-ui/react";
import React from "react";

const employers = () => {
  return (
    <>
      <Header notLogin />
      <FindTalentHere />
      <Features />
      <Pricing />
      <JobreefRecruit
        title={"Search For Local Talent With Jobreef Recruit"}
        content={
          "Browse our database of candidates and filter resumes based on your job requirements. Use instant messaging to connect with qualified jobseekers"
        }
        amount={"$99/month"}
        btnLabel={"Learn More"}
      />
      <HowItWork />
      <Box mb={"40px"}>
        <TopCompanies />
      </Box>
      <ContactForm
        style={{ mb: "150px", }}
        smallText={"Together"}
        label={"Let’s Work "}
      />
      <Footer />
    </>
  );
};

export default employers;
