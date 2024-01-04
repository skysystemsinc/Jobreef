import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import profile_icon from "@/assets/Images/profile_icon.svg";
import JobPostButton from "./JobPostButton";
const Pending = () => {
  const router = useRouter();
  const columns = [
    {
      id: "id",
      jobTitle: "job Title",
      company: "Company",

      createdBy: "Created By",
      createdAt: "Created On (MM/DD/YY) ",
      expireOn: "Expire On",
      Actions: "Actions",
    },
  ];
  const keys = [
    "id",
    "jobTitle",
    "company",
    "expireOn",
    "createdBy",
    "createdAt",
    "Actions",
  ];
  const handleEdit =()=>{
    router.push("/operator/edit-job-post")
  }
  const actionList = [
    { title: "Approve" },
    { title: "Reject" },
    { title: "Edit" , handleEvent:handleEdit},
  ];
  const data = [
    {
      id: "1",
      jobTitle: "Systems Engineer",
      company: "Microsoft",
      createdBy: "user@example.org",
      createdAt: "20/08/23",
      expireOn: "20/08/23",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      id: "2",
      jobTitle: "Systems Engineer",
      company: "Microsoft",
      createdBy: "user@example.org",
      createdAt: "20/08/23",
      expireOn: "20/08/23",
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
    <JobPostButton/>
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

export default Pending;
