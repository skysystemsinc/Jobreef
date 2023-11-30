import ActivelyRecruiting from "@/Compomnents/ActivelyRecruiting/ActivelyRecruiting";
import Counter from "@/Compomnents/Counter/Counter";
import CounterBox from "@/Compomnents/CounterBox/CounterBox";
import Footer from "@/Compomnents/Footer/Footer";
import Header from "@/Compomnents/Header/Header";
import HeroSection from "@/Compomnents/HeroSection/HeroSection";
import HireTalent from "@/Compomnents/HireTalent/HireTalent";
import LatestJobs from "@/Compomnents/LatestJobs/LatestJobs";
import LatestStories from "@/Compomnents/LatestStories/LatestStories";
import NewsLetter from "@/Compomnents/NewsLetter/NewsLetter";
import Testimonial from "@/Compomnents/Testimonial/Testimonial";
import TopCompanies from "@/Compomnents/TopCompanies/TopCompanies";
import React from "react";
import {
  Box,

} from "@chakra-ui/react";
const index = () => {
  return (
    <>
      <Header notLogin />
      <HeroSection />
      <Counter />
      <LatestJobs />
      <TopCompanies />
      <HireTalent />
      <ActivelyRecruiting />
      <Testimonial />
      <LatestStories />
      <Box mt={{md: "20px", base:"0px"}} mb={{ md: "60px", base:"30px"}}>
        <NewsLetter />
      </Box>
      <Footer />
    </>
  );
};

export default index;
