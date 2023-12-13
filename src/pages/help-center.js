import ContactForm from "@/Compomnents/ContactForm/ContactForm";
import Faqs from "@/Compomnents/Faqs/Faqs";
import Footer from "@/Compomnents/Footer/Footer";
import Header from "@/Compomnents/Header/Header";
import HowToGuid from "@/Compomnents/HowToGuid/HowToGuid";
import SeekerTextBox from "@/Compomnents/SeekerTextBox/SeekerTextBox";
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
