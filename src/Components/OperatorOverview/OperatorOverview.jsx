import { Box } from "@chakra-ui/react";
import React from "react";
import Activity from "../Activity/Activity";
import OverviewBox from "../OverviewBox/OverviewBox";

const OperatorOverview = () => {
  const companyCount = [
    {
      title: "Active",
      count: 66,
    },
    {
      title: "Pending",
      count: 122,
    },
    {
      title: "Inactive",
      count: 212,
    },
  ];
  const userCount = [
    {
      title: "Active",
      count: 646,
    },
    {
      title: "Pending",
      count: 122,
    },
    {
      title: "Inactive",
      count: 212,
    },
    {
      title: "Employers",
      count: 212,
    },
    {
      title: "Jobseekers",
      count: 212,
    },
  ];
  const abuseCount = [
    {
      title: "Active",
      count: 158,
    },
    {
      title: "Pending",
      count: 158,
    },
    {
      title: "Inactive",
      count: 158,
    },
  ];
  return (
    <Box
      padding={{ lg: "20px 50px 120px 50px", base: "30px 10px 50px 10px" }}
      columnGap={{ lg: "50px", base: "20px" }}
      display={"grid"}
      gridTemplateColumns={{
        lg: "repeat(2, 1fr)",
        md: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        base: "repeat(1, 1fr)",
      }}
    >
      <Box display={"flex"} flexDir={{ lg: "column", base:"column-reverse"}} order={{ lg: 1, base: 2 }}>
        <Activity />
        <Box my={{md: "20px", base:"0px"}}>
          <OverviewBox label={"Abuse Reports"} data={abuseCount} />
        </Box>
      </Box>
      <Box order={{ lg: 2, base: 1 }}>
        <Box mb={"20px"}>
          <OverviewBox label={"Companies"} data={companyCount} />
        </Box>
        <Box mb={"20px"}>
          <OverviewBox label={"Job Posts"} data={companyCount} />
        </Box>
        <Box mb={"20px"}>
          <OverviewBox label={"Users"} data={userCount} />
        </Box>
      </Box>
    </Box>
  );
};

export default OperatorOverview;
