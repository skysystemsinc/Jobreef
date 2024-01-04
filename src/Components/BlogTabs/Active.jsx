import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import companyIcon from "@/assets/Images/companyIcon.svg";
import CompanyButton from "./CompanyButton";
const ActiveJobs = () => {
  const router = useRouter();
  const handleEdit = (id) => {
    router.push(`/operator/create-company?id=${id}`);
  };
  const actionList = [
    { title: "Deactivate" },
   
    { title: "Edit" ,handleEvent:handleEdit },
  ];
  const columns = [
    {
      title: "Blog Title ",
      category: "Category",
      author: "Author",
      lastUpdate: "Last Update",
  
      Actions: "Actions",
    },
  ];
  const keys = [
    "title",
    "category",
    "author",
    "lastUpdate",

    "Actions",
  ];
  const data = [
    {
      title: "Marketing",
      category: "Marketing",
      author: "John",
      lastUpdate: "20/08/23",
      
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
      <Box minH={"52vh"} pb={"20px"}>
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
