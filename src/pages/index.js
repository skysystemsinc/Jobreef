import Counter from "@/Compomnents/Counter/Counter";
import CounterBox from "@/Compomnents/CounterBox/CounterBox";
import Footer from "@/Compomnents/Footer/Footer";
import Header from "@/Compomnents/Header/Header";
import HeroSection from "@/Compomnents/HeroSection/HeroSection";
import LatestJobs from "@/Compomnents/LatestJobs/LatestJobs";
import TopCompanies from "@/Compomnents/TopCompanies/TopCompanies";
import React from "react";

const index = () => {
  return (
    <>
      <Header notLogin />
      <HeroSection />
      <Counter/>
      <LatestJobs/>
      <TopCompanies/>
      <Footer/>
    </>
  );
};

export default index;
