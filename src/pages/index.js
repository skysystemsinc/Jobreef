import ActivelyRecruiting from "@/Components/ActivelyRecruiting/ActivelyRecruiting";
import Counter from "@/Components/Counter/Counter";
import CounterBox from "@/Components/CounterBox/CounterBox";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import HeroSection from "@/Components/HeroSection/HeroSection";
import HireTalent from "@/Components/HireTalent/HireTalent";
import LatestJobs from "@/Components/LatestJobs/LatestJobs";
import LatestStories from "@/Components/LatestStories/LatestStories";
import NewsLetter from "@/Components/NewsLetter/NewsLetter";
import Testimonial from "@/Components/Testimonial/Testimonial";
import TopCompanies from "@/Components/TopCompanies/TopCompanies";
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
