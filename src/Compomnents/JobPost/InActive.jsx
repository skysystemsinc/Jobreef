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
  const actionList = ["Edit", "Activate" , "Delete Job"];
  const data = [
    {
      "Job Title": "Social Media Manager",
      "Employment Type": "mscott@example.org",
      Candidates: "1",
      Openings: "1 Year",
      "Status": "Paused",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      "Job Title": "Social Media Manager",
      "Employment Type": "mscott@example.org",
      Candidates: "1",
      Openings: "1 Year",
      "Status": "Paused",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      "Job Title": "Social Media Manager",
      "Employment Type": "mscott@example.org",
      Candidates: "1",
      Openings: "1 Year",
      "Status": "Expired",
      Actions: <Popovers actionList={actionList} />,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of rows per page

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <Box minH={"78vh"} pb={"20px"  } >
        <PaginatedTable
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
