import AboutUs from "@/Components/AboutUs/AboutUs";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import HireTalent from "@/Components/HireTalent/HireTalent";
import NewsLetter from "@/Components/NewsLetter/NewsLetter";
import Opportunity from "@/Components/Opportunity/Opportunity";
import Testimonial from "@/Components/Testimonial/Testimonial";
import TopCompanies from "@/Components/TopCompanies/TopCompanies";
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
