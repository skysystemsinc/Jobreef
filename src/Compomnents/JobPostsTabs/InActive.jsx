import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import profile_icon from "@/assets/Images/profile_icon.svg";
const InActive = () => {
  const router = useRouter();
  const handleEdit = () => {
    router.push("/operator/edit-job-post");
  };
  const actionList = [
    { title: "Edit", handleEvent: handleEdit },
    { title: "Delete" },
  ];
  const columns = [
    {
      id: "id",
      jobTitle: "job Title",
      company: "Company",

      createdBy: "Created By",
      createdAt: "Created On (MM/DD/YY) ",
      status: "Status ",
      Actions: "Actions",
    },
  ];
  const keys = [
    "id",
    "jobTitle",
    "company",
    "status",
    "createdBy",
    "createdAt",
    "Actions",
  ];
  const data = [
    {
      id: "1",
      jobTitle: "Systems Engineer",
      company: "Microsoft",
      createdBy: "user@example.org",
      createdAt: "20/08/23",
      status: "Inactive",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      id: "2",
      jobTitle: "Systems Engineer",
      company: "Microsoft",
      createdBy: "user@example.org",
      createdAt: "20/08/23",
      status: "Inactive",
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
      <Box minH={"62vh"} pb={"20px"}>
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

export default InActive;
