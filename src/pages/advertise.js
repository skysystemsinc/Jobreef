import AdvertiseWithUs from "@/Compomnents/AdvertiseWithUs/AdvertiseWithUs";
import AdvertisingBox from "@/Compomnents/AdvertisingBox/AdvertisingBox";
import ContactForm from "@/Compomnents/ContactForm/ContactForm";
import Footer from "@/Compomnents/Footer/Footer";
import Header from "@/Compomnents/Header/Header";
import TeamSlider from "@/Compomnents/TeamSlider/TeamSlider";
import { Box, Container } from "@chakra-ui/react";
import React from "react";

const advertise = () => {
  return (
    <>
      <Header />
      <AdvertiseWithUs
        title={"Advertise With Us"}
        subTitle={"Connect with our audience of jobseekers and employers."}
      />
      <Container  mt={"-130px"} maxWidth={"5xl"}>
        <TeamSlider style={{ px: "45px" }} />
      </Container>
      <Box mt={{ md: "100px", base:"50px"}}  mx={"10px"}>
        <AdvertisingBox />
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

export default advertise;
