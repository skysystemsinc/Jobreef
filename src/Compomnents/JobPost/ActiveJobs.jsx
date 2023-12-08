import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import { useDispatch, useSelector } from "react-redux";

import ReactTable from "../PaginatedTable/ReactTable";
import moment from "moment";
import { addJob } from "@/Reudx/slices/jobPost";
const ActiveJobs = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const jobState = useSelector((state) => state.jobPost.jobs.activeJobs);
  const handleEdit = (data) => {
    router.push(`/company/create-job-post?id=${data.id}`);
    dispatch(addJob({ ...data, ...data.location }));
  };
  const handlePause = () => {};
  const handleCloseJob = () => {};

  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Job Title",
      },
      {
        accessorKey: "employmentType",
        header: "Employment Type",
        cell: ({ row: { original } }) =>
          original.employmentType === "" ? "-" : original.employmentType,
      },
      {
        accessorKey: "opening",
        header: "Openings",
        cell: ({ row: { original } }) => original.opening,
      },
      {
        accessorKey: "applicationDeadline",
        header: "Expires On",
        cell: ({ row: { original } }) => {
          {
            return moment(original.applicationDeadline).format("YYYY-MM-DD");
          }
        },
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row: { original } }) => {
          const actionList = [
            { title: "Edit", handleEvent: () => handleEdit(original) },
            { title: "Pause", handleEvent: () => handlePause(original) },
            { title: "Close job", handleEvent: () => handleCloseJob(original) },
          ];
          return <Popovers actionList={actionList} />;
        },
      },
    ],
    []
  );

  return (
    <>
      <Box minH={"78vh"} pb={"20px"}>
        <ReactTable columns={columns} data={jobState} />
        {/* {jobState ? (
          <PaginatedTable
            keys={keys}
            totalPages={totalPages}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            columns={columns}
            data={jobState}
          />
        ) : null} */}
      </Box>
    </>
  );
};

export default ActiveJobs;
