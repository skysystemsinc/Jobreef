import React from "react";
import { Box, Button, Heading, Flex, Input } from "@chakra-ui/react";
const SubscriptionCard = ({ noActiveSub }) => {
  return (
    <Box
      border={"1px solid"}
      borderColor={"gray.400"}
      borderRadius="8px"
      p={"20px 30px 30px 30px"}
      boxShadow={" 0px 4px 20px 0px rgba(0, 0, 0, 0.05)"}
      bg={"white.100"}
    >
      <Heading color={"gray.text"} variant={"p7"}>
        Subscription Plan
      </Heading>

      <Box
        mt={"13px"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {noActiveSub ? (
          <Heading color={"gray.text"} variant={"p7"}>
            No Active Subscriptions
          </Heading>
        ) : (
          <Heading color={"gray.text"} variant={"p7"}>
            Jobreef Recruit PRO | Renews 30/11/2023
          </Heading>
        )}
        {noActiveSub ? null : (
          <Button width={"max-content"} variant={"outline-blue"}>
            {" "}
            Cancel Subscription
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SubscriptionCard;
