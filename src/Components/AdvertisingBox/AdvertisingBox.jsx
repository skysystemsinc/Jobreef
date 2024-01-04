import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

const AdvertisingBox = () => {
  return (
    <Container
      maxW={"5xl"}
      boxShadow={
        "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)"
      }
      mb={"60px"}
      borderRadius={"8px"}
      border={"1px solid"}
      borderColor={"white.200"}
      
      p={{ md: "36px 30px 25px 30px", base:"26px 17px 24px 20px"}}
    >
      <Heading mb={{ md: "25px", base:"13px"}} variant={"p11"} color={"gray.text"}>
        Advertising with
        <Box as="span" color={"blue.500"}>
          {" "}
          Jobreef
        </Box>
      </Heading>
      <Heading variant={"p11"} color={"gray.text"} fontWeight={500}>
        Jobreef is the most advanced job and talent search platform in The
        Bahamas. Everyday jobseekers use our website to search and apply for
        jobs, and employers visit us to find and hire the best local talent. We
        also provide helpful career advice resources and guides on how employers
        can improve hiring practices and employee relations. Advertising with
        Jobreef allows you to display your products and services to the
        thousands of diverse visitors we receive each month. Use the contact
        form below if you are interested our send us an email at
        sales@jobreef.net
      </Heading>
    </Container>
  );
};

export default AdvertisingBox;
