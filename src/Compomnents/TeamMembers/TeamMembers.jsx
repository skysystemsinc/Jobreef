import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import { getTeamMembers } from "@/Reudx/slices/teamMembers";
import { useSelector } from "react-redux";
const TeamMembers = () => {
  const teamMemebers = useSelector((state) => state.teamMembers.value);

  const router = useRouter();
  const columns = [
    {
      name: "Name",
      email: "Email",
      JobTitle: "Job Title",
      role: "Role",
      status: "Status",
      Actions: "Actions",
    },
  ];
  const keys = ["name", "email", "JobTitle", "role", "status", "Actions"];
  const actionList = ["Edit", "Disable"];
  const data = [
    {
      name: "Michael Scott",
      email: "mscott@example.org",
      JobTitle: "Director, Talent Acquisition",
      role: "Owner",
      status: "Active",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      name: "Michael Scott",
      email: "mscott@example.org",
      JobTitle: "Director, Talent Acquisition",
      role: "Owner",
      status: "Active",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      name: "Michael Scott",
      email: "mscott@example.org",
      JobTitle: "Director, Talent Acquisition",
      role: "Owner",
      status: "Active",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      name: "Michael Scott",
      email: "mscott@example.org",
      JobTitle: "Director, Talent Acquisition",
      role: "Owner",
      status: "Active",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      name: "Michael Scott",
      email: "mscott@example.org",
      JobTitle: "Director, Talent Acquisition",
      role: "Owner",
      status: "Active",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      name: "Michael Scott",
      email: "mscott@example.org",
      JobTitle: "Director, Talent Acquisition",
      role: "Owner",
      status: "Active",
      Actions: <Popovers actionList={actionList} />,
    },
    {
      name: "Michael Scott",
      email: "mscott@example.org",
      JobTitle: "Director, Talent Acquisition",
      role: "Owner",
      status: "Active",
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

  const getData = async () => {
    try {
      const teamMembers = await axios({
        method: "GET",
        url: "/api/company/teamMembers",
      });
      dispatch(getTeamMembers(teamMembers.data));
    } catch (err) {}
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  return (
    <>
      <Box
        minH={"78vh"}
        width={"99%"}
        // border={"1px solid red"}
        pb={"20px"}
        bg={"white.100"}
        // mr={{ md: "20px", base: "5px" }}
      >
        <Flex justifyContent={"flex-end"} mb={"17px"}>
          <Button
            onClick={() => router.push("/company/add-members")}
            variant={"blue-btn"}
            width={"max-content"}
            px={" 20px"}
          >
            {" "}
            Add Team Members{" "}
          </Button>
        </Flex>
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

export default TeamMembers;
