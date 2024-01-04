import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import PlanCard from "./PlanCard";

const SubscriptionPlans = () => {
  const plans = [
    {
      title: "Basic Plan - $99 per month",
      content: "10 New Contacts Per Month",
      active: false,
    },
    {
      title: "Professional Plan - $199 per month",
      content: "50 New Contacts Per Month",
      active: true,
    },
    {
      title: "Agency Plan - $299 per month",
      content: "100 New Contacts Per Month",
      active: false,
    },
  ];
  return (
    <Box>
      <Heading
        fontWeight={600}
        textAlign={"center"}
        variant={"p6"}
        m={{ md: "0px 0px 40px 0px", base: "00px 0px 30px 0px" }}
        color={"gray.text !important"}
        className="sora"
      >
        Choose a Subscription
      </Heading>
      <Box>
        {plans.map((item) => {
          return <PlanCard data={item} />;
        })}
      </Box>
      <Heading
        mx={"auto"}
        mt={"40px"}
        mb={"40px"}
        variant={"p4"}
        maxW={"480px"}
        textAlign={"center"}
      >
        By subscribing you agree to abide by all Terms and Conditions and to pay
        the fees of your selected plan.
      </Heading>
    </Box>
  );
};

export default SubscriptionPlans;
