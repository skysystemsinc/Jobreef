import globalStyles from "@/styles/globalStyles";
import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Activity = () => {
      const activity = [
    {
      title:
        "New application received from Aaron Smith for job Systems Engineer!",
    },
    {
      title:
        "New application received from Aaron Smith for job Systems Engineer!",
    },
    {
      title:
        "New application received from Aaron Smith for job Systems Engineer!",
    },
  ];
  return (
    <Box
      mt={{ lg: "0px", base: "20px" }}
      sx={globalStyles.shadowBox}
    >
      <Box
        padding={"20px 15px"}
        borderBottom={"1px solid"}
        borderColor={"gray.500"}
      >
        <Heading color={"black.100"} variant={"p6"}>
          Activity
        </Heading>
      </Box>
      {activity.map((item, ind) => {
        return (
          <Box
            key={ind}
            mb={ind == 2 ? "0px" : { md: "26px", base: "20px" }}
            boxShadow={"0px 2px 15px 0px rgba(0, 0, 0, 0.06)"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={{ md: "center", base: "flex-end" }}
            padding={{ md: "22px 15px", base: "20px 15px" }}
            borderBottom={"1px solid"}
            borderColor={"gray.500"}
          >
            <Heading
              maxWidth={"360px"}
              fontWeight={500}
              variant={"p5"}
              color={"black.100"}
            >
              New application received from{" "}
              <Box as="span" color={"blue.500"}>
                {" "}
                Aaron Smith
              </Box>{" "}
              for job{" "}
              <Box as="span" color={"blue.500"}>
                {" "}
                Systems Engineer!
              </Box>
            </Heading>
            <Heading whiteSpace={"nowrap"} variant={"p12"} color={"gray.400"}>
              2 Days Ago
            </Heading>
          </Box>
        );
      })}

      <Box
        padding={{ md: "30px 20px 17px 20px", base: "20px 20px 17px 20px" }}
        textAlign={"end"}
      >
        <Heading
          textDecoration={"underline"}
          variant={"p5"}
          color={"black.100"}
        >
          <Link href={""}>Clear Recent Activity</Link>
        </Heading>
      </Box>
    </Box>
  );
};

export default Activity;
