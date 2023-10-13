import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import PaginatedTable from "../MembersTable/MembersTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../MembersTable/Popovers";
const TeamMembers = () => {
  const router = useRouter();
  const columns = ["Name", "Email", "Job Title", "Role", "Status", "Actions"];
  const actionList = ["Edit", "Disable"];
  const data = [
    {
      Name: "Michael Scott",
      Email: "mscott@example.org",
      "Job Title": "Director, Talent Acquisition",
      Role: "Owner",
      Status: "Active",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      Name: "Michael Scott",
      Email: "mscott@example.org",
      "Job Title": "Director, Talent Acquisition",
      Role: "Owner",
      Status: "Active",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      Name: "Michael Scott",
      Email: "mscott@example.org",
      "Job Title": "Director, Talent Acquisition",
      Role: "Owner",
      Status: "Active",
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
      <Box minH={"78vh"} width={{ md: "100%", base: "100%" }} pb={"20px"} mr={"10px"} >
        <Flex justifyContent={"flex-end"} mb={"17px"}>
          <Button
            onClick={() => router.push("/company/add-members")}
            variant={"blue-btn"}
            width={"max-content"}
            px={" 20px"}
          >
            {" "}
            Add Team Member{" "}
          </Button>
        </Flex>
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

export default TeamMembers;
