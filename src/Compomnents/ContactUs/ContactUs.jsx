import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ContactForm from "../ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <Box>
      <Box my={{md: '50px', base:"39px"}}>
        <Heading
          textAlign={"center"}
          fontWeight={500}
          className="sora"
          variant={"h2"}
        >
          Contact Us
        </Heading>
        <Heading
          mb={{ md: "39px", base: "25px" }}
          fontWeight={400}
          mt={{ md:"6px", base:"0px"}}
          color={"gray.text"}
          textAlign={"center"}
          variant={"p7"}
        >
          Get in touch with our team members!
        </Heading>
      </Box>

      <ContactForm />
    </Box>
  );
};

export default ContactUs;
