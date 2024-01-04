import ContactForm from "@/Components/ContactForm/ContactForm";
import Faqs from "@/Components/Faqs/Faqs";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import HowToGuid from "@/Components/HowToGuid/HowToGuid";
import SeekerTextBox from "@/Components/SeekerTextBox/SeekerTextBox";
import React from "react";

const helpCenter = () => {
  return (
    <>
      <Header notLogin />
      <SeekerTextBox
        title={"Help Center"}
        subTitle={
          "Discover helpful how-tos and answers to frequently asked questions"
        }
        style={{maxWidth:"100%", textAlign:'center !important'}}
      />
      <HowToGuid/>
      <Faqs/>
      <ContactForm
        style={{ mb: "150px" }}
        smallText={"Here"}
        label={"Get Help  "}
      />
      <Footer />
    </>
  );
};

export default helpCenter;
