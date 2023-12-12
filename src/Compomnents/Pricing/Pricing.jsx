import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import PricingCard from "../PricingCard/PricingCard";

const Pricing = () => {
  const pricingArray = [
    {
      title: "Standard Job Post",
      amount: "4.99",
      day: "/day",
      feature: [
        "Applicant Tracking",
        "Candidate Screening",
        "Instant Messaging",
        "7-Day Free Trial*",
      ],
    },
    {
      title: "Featured Job Post",
      amount: "9.99",
      day: "/day",
      feature: [
        "All Standard Features",
        "Top Search Results",
        "Homepage Placement",
        "Social Media Post ",
      ],
    },
    {
      title: "Enterprise Contract",
      amount: "Custom",
      day: "",
      feature: [
        "Volume Discounts",
        "Flexible Billing",
        "Featured Company",
        "Premium Support",
      ],
    },
  ];
  return (
    <Container maxW={"60em"}>
      <Box
        textAlign={"center"}
        mx={"auto"}
        mt={{ md: "40px", base: "30px" }}
        mb={{ md: "42px ", base: "30px" }}
      >
        <Heading
          variant={"h1"}
          color={"blue.500"}
          mb={{ md: "14px", base: "3px" }}
          className="sora"
        >
          Pricing
        </Heading>
        <Heading color={"gray.text"} fontWeight={400} variant={"p11"}>
          Flexible pricing for any size business.
        </Heading>
      </Box>
      <Box
        mb={{ md: "90px", base: "40px" }}
        columnGap={{ md: "60px", base: "40px" }}
        display={"grid"}
        gridTemplateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
      >
        {pricingArray.map((item) => {
          return <PricingCard  data={item} />;
        })}
        {/* <PricingCard />
        <PricingCard /> */}
      </Box>
    </Container>
  );
};

export default Pricing;
