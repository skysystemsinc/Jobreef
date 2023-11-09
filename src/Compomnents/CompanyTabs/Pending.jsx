import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import companyIcon from "@/assets/Images/companyIcon.svg";
import CompanyButton from "./CompanyButton";
const Pending = () => {
  const router = useRouter();
  const columns = [
    {
      companyName: "Company Name ",
      location: "Location",
      owner: "Owner",
      members: "Members",
      createdAt: "Created On (MM/DD/YY) ",
      Actions: "Actions",
    },
  ];
  const keys = [
    "companyName",
    "location",
    "owner",
    "members",
    "createdAt",
    "Actions",
  ];
  const actionList = ["Approve", "Reject",];
  const data = [
    {
      companyName: { image: companyIcon.src, name: "Company Name" },
      location: "Nassau, The Bahamas",
      owner: "Nassau, The Bahamas",
      members: "35",
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
    <CompanyButton/>

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

export default Pending;
