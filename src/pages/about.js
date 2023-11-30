import AboutUs from "@/Compomnents/AboutUs/AboutUs";
import Footer from "@/Compomnents/Footer/Footer";
import Header from "@/Compomnents/Header/Header";
import HireTalent from "@/Compomnents/HireTalent/HireTalent";
import NewsLetter from "@/Compomnents/NewsLetter/NewsLetter";
import Opportunity from "@/Compomnents/Opportunity/Opportunity";
import Testimonial from "@/Compomnents/Testimonial/Testimonial";
import TopCompanies from "@/Compomnents/TopCompanies/TopCompanies";
import { Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Header notLogin/>
      <AboutUs/>
      <Opportunity />
      <TopCompanies />
      <HireTalent />

      <Box mt={"80px"} mb={"80px"}>
        <NewsLetter />
      </Box>
      <Testimonial />
      <Footer />
    </Box>
  );
};

export default About;
