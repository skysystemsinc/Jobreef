import AdvertiseWithUs from "@/Components/AdvertiseWithUs/AdvertiseWithUs";
import AdvertisingBox from "@/Components/AdvertisingBox/AdvertisingBox";
import ContactForm from "@/Components/ContactForm/ContactForm";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import TeamSlider from "@/Components/TeamSlider/TeamSlider";
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
