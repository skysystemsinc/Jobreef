import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingPlans = () => {
  const pricingArray = [
    {
      title: "Basic",
      amount: "99",
      day: "/month",
      feature: [
        "10 Saved Contacts",
        "Powerful Search Features",
        "Talent Management",
      ],
    },
    {
      title: "Professional",
      amount: "199",
      day: "/month",
      feature: [
        "50 Saved Contacts",
        "All Basic Features",
        "Great For Larger Teams",
      ],
    },
    {
      title: "Agency",
      amount: "299",
      day: "month",
      feature: [
        "100 Saved Contacts",
        "All Professional Features",
        "For Recruiters & Agencies",
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
          color={"gray.text"}
          mb={{ md: "14px", base: "3px" }}
          className="sora"
        >
          Plans and
          <Box as="span" color={"blue.500"}>
            {" "}
            Pricing
          </Box>
        </Heading>
        <Heading
          maxWidth={{ md: "59%", base:"90%"}}
          mx={"auto"}
          color={"gray.text"}
          fontWeight={400}
          variant={"p11"}
        >
          Jobreef Recruit is available as a monthly subscription with flexible
          plans to fit any budget.
        </Heading>
      </Box>
      <Box
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
          return (
            <PricingCard
              boxStyle={{
                "& .amount":{
                    color:'gray.text'
                },
                "& .header": {
                  backgroundColor: "yellow.100",
                  h4: { color: "gray.text !important" },
                },
                button: { color: "gray.text" },
              }}
              btnVariant={"yellow-btn"}
              data={item}
              iconStyle={{ color: "yellow.100" }}
            />
          );
        })}
      </Box>
      <Heading
        mb={{ md: "90px", base: "40px" }}
        textAlign={"center"}
        maxWidth={"500px"}
        mx={"auto"}
        variant={"p4"}
      >
        By subscribing you agree to abide by all Terms and Conditions and to pay
        the fees of your selected plan.
      </Heading>
    </Container>
  );
};

export default PricingPlans;
