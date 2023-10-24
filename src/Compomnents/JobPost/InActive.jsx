import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import PaginatedTable from "../MembersTable/MembersTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../MembersTable/Popovers";
const InActiveJobs = () => {
  const router = useRouter();
  const columns = [
    "Job Title",
    "Employment Type",
    "Candidates",
    "Openings",
    "Status",
    "Actions",
  ];
  const keys = [
    "jobTitle",
    "employeeType",
    "Candidates",
    "noOfOpening",
    "status",
    "Actions",
  ];
  const actionList = ["Edit", "Pause", "Close job"];
  const data = [
    {
      "jobTitle": "Social Media Manager",
      "employeeType": "mscott@example.org",
      Candidates: "1",
      noOfOpening: "1 Year",
      "status": "Expired",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      "jobTitle": "Social Media Manager",
      "employeeType": "mscott@example.org",
      Candidates: "1",
      noOfOpening: "1 Year",
      "status": "Expired",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      "jobTitle": "Social Media Manager",
      "employeeType": "mscott@example.org",
      Candidates: "1",
      noOfOpening: "1 Year",
      "status": "Expired",
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

export default InActiveJobs;
