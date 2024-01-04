import globalStyles from "@/styles/globalStyles";
import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Activity from "../Activity/Activity";

const CompanyOverview = () => {
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
      padding={{ lg: "20px 50px 120px 50px", base: "0px 10px 90px 10px" }}
      columnGap={{ lg: "60px", base: "20px" }}
      display={"grid"}
      gridTemplateColumns={{
        lg: "repeat(2, 1fr)",
        md: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        base: "repeat(1, 1fr)",
      }}
    >
      <Box order={{ lg: 1, base: 2 }}>
        <Activity />
      </Box>
      {/* <Box  mt={{lg:"0px", base:"20px"}} order={{ lg:1 , base:2,}} sx={globalStyles.shadowBox}>
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
              mb={ind == 2 ? "0px" : { md:"26px", base:"20px"}}
              boxShadow={"0px 2px 15px 0px rgba(0, 0, 0, 0.06)"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={{ md: "center", base:"flex-end"}}
              padding={{ md: "22px 15px",base: "20px 15px"}}
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

        <Box padding={{ md: "30px 20px 17px 20px", base:'20px 20px 17px 20px'}} textAlign={"end"}>
          <Heading
            textDecoration={"underline"}
            variant={"p5"}
            color={"black.100"}
          >
            <Link href={""}>Clear Recent Activity</Link>
          </Heading>
        </Box>
      </Box> */}
      <Box order={{ lg: 2, base: 1 }}>
        {Array.from({ length: 2 }, (item, ind) => {
          return (
            <Box
              key={ind}
              mb={{ lg: "32px", base: "20px" }}
              padding={{
                md: "25px 40px 21px 40px",
                base: "20px 20px 21px 20px",
              }}
              sx={globalStyles.shadowBox}
            >
              <Heading variant={"p13"} color={"black.100"} fontWeight={400}>
                Total Spent on Job Posts
              </Heading>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"flex-end"}
                mt={{ md: "30px", base: "17px" }}
              >
                <Heading color={"blue.500"} fontWeight={700} variant={"h1"}>
                  $838.80
                </Heading>
                <Heading variant={"p4"}>Current Billing Cycle</Heading>
              </Box>
            </Box>
          );
        })}

        <Box display={"flex"} gap={"7%"}>
          <Box
            sx={globalStyles.shadowBox}
            padding={"0px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            textAlign={"center"}
          >
            <Heading variant={"p13"} color={"black.100"} fontWeight={400}>
              Active Job Posts
            </Heading>
            <Heading
              // mt={"30px"}
              mt={{ md: "30px", base: "10px" }}
              color={"blue.500"}
              fontWeight={700}
              variant={"h1"}
            >
              12
            </Heading>
          </Box>
          <Box
            sx={globalStyles.shadowBox}
            padding={{ md: "25px", base: "19px" }}
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Heading variant={"p13"} color={"black.100"} fontWeight={400}>
              New Applications
            </Heading>
            <Heading
              mt={{ md: "30px", base: "10px" }}
              color={"blue.500"}
              fontWeight={700}
              variant={"h1"}
            >
              45
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyOverview;
