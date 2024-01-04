import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import companyIcon from "@/assets/Images/companyIcon.svg";
import CompanyButton from "./CompanyButton";
const InActive = () => {
  const router = useRouter();
  const handleEdit = (id) => {
    router.push(`/operator/create-company?id=${id}`);
  };
  const actionList = [
    { title: "Edit" ,handleEvent:handleEdit },
    { title: "Restore" },
    { title: "Delete" },
  ];
  
  const columns = [
    {
      companyName: "Company Name ",
      location: "Location",
      owner: "Owner",
      jobPosts: "job Posts",
      createdAt: "Created On (MM/DD/YY) ",
      Actions: "Actions",
    },
  ];
  const keys = [
    "companyName",
    "location",
    "owner",
    "jobPosts",
    "createdAt",
    "Actions",
  ];
  const data = [
    {
      companyName: "Company Name",
      location: "Nassau, The Bahamas",
      owner: "Nassau, The Bahamas",
      jobPosts: "35",
      createdAt: "20/08/23",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      companyName: "Company Name",
      location: "Nassau, The Bahamas",
      owner: "Nassau, The Bahamas",
      jobPosts: "35",
      createdAt: "20/08/23",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      companyName: "Company Name",
      location: "Nassau, The Bahamas",
      owner: "Nassau, The Bahamas",
      jobPosts: "35",
      createdAt: "20/08/23",
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
      <CompanyButton />

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

export default InActive;
