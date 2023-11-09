import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import profile_icon from "@/assets/Images/profile_icon.svg";
import UserButton from "./UserButton";
const InActive = () => {
  const router = useRouter();
  const columns = [
    {
      name: "Name",
      email: "Email",
      userType: "User Type",
      // members: "Members",
      createdAt: "Created On (MM/DD/YY) ",
      Actions: "Actions",
    },
  ];
  const keys = ["name", "email", "userType", "createdAt", "Actions"];
  const actionList = ["Restore", "Delete"];
  const data = [
    {
      name: { image: profile_icon.src, name: "Tom Brady" },
      email: "tom@tb12.com",
      userType: "Candidate",
      // members: "35",
      createdAt: "20/08/23",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      name: { image: profile_icon.src, name: "Tom Brady" },
      email: "tom@tb12.com",
      userType: "Candidate",
      // members: "35",
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
      <UserButton />
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
