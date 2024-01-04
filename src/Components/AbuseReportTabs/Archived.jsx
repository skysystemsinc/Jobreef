import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";

const Archived = () => {
  const router = useRouter();
  const handleEdit = (id) => {
    // router.push(`/operator/create-company?id=${id}`);
    
  };
  const actionList = [
    { title: "Reactivate", handleEvent: handleEdit },
    { title: "Delete", handleEvent: handleEdit },
  ];

  const columns = [
    {
      reportId: "Report ID",
      contentType: "Content Type",
      abuseCategory: "Abuse Category",
      status: "Resolution",
      createdAt: "Closed On (MM/DD/YY) ",
      Actions: "Actions",
    },
  ];
  const keys = [
    "reportId",
    "contentType",
    "abuseCategory",
    "status",
    "createdAt",
    "Actions",
  ];
  const data = [
    {
      reportId: "4839104947",
      contentType: "Job Post",
      abuseCategory: "Spam or Offensive",
      status: "Content Removed",
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
      <Box minH={"78vh"} pb={"20px"} pt={{ md: "30px", base: "0px" }}>
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

export default Archived;
