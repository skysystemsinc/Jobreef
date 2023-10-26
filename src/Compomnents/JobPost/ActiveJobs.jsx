import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
const ActiveJobs = () => {
  const router = useRouter();
  const columns = [
    {
      jobTitle: "Job Title",
      employeeType: "Employment Type",
      Candidates: "Candidates",
      noOfOpening: "Openings",
      ExpiresOn: "Expires On",
      Actions: "Actions",
    },
  ];
  const keys = [
    "jobTitle",
    "employeeType",
    "Candidates",
    "noOfOpening",
    "ExpiresOn",
    "Actions",
  ];
  const actionList = ["Edit", "Pause", "Close job"];
  const data = [
    {
      "jobTitle": "Social Media Manager",
      "employeeType": "mscott@example.org",
      Candidates: "1",
      noOfOpening: "1 Year",
      "ExpiresOn": "Communications",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      "jobTitle": "Social Media Manager",
      "employeeType": "mscott@example.org",
      Candidates: "1",
      noOfOpening: "1 Year",
      "ExpiresOn": "Communications",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      "jobTitle": "Social Media Manager",
      "employeeType": "mscott@example.org",
      Candidates: "1",
      noOfOpening: "1 Year",
      "ExpiresOn": "Communications",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      "jobTitle": "Social Media Manager",
      "employeeType": "mscott@example.org",
      Candidates: "1",
      noOfOpening: "1 Year",
      "ExpiresOn": "Communications",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      "jobTitle": "Front end developer",
      "employeeType": "mscott@example.org",
      Candidates: "3",
      noOfOpening: "1 Year",
      "ExpiresOn": "Communications",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      "jobTitle": "Social Media Manager",
      "employeeType": "mscott@example.org",
      Candidates: "1",
      noOfOpening: "1 Year",
      "ExpiresOn": "Communications",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      "jobTitle": "Social Media Manager",
      "employeeType": "mscott@example.org",
      Candidates: "1",
      noOfOpening: "1 Year",
      "ExpiresOn": "Communications",
      Actions: <Popovers actionList={actionList} />,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of rows per page
  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <>
      <Box minH={"78vh"} pb={"20px"}>
        <PaginatedTable
          keys={keys}
          totalPages={totalPages}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          columns={columns}
          data={data}
        />
      </Box>
    </>
  );
};

export default ActiveJobs;
