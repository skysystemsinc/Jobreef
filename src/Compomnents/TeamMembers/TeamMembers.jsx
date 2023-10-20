import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PaginatedTable from "../MembersTable/MembersTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../MembersTable/Popovers";
import { getTeamMembers } from "@/Reudx/slices/teamMembers";
import { useSelector } from "react-redux";
const TeamMembers = () => {
  const teamMemebers = useSelector((state) => state.teamMembers.value);
  console.log("teamMemebers", teamMemebers);

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
