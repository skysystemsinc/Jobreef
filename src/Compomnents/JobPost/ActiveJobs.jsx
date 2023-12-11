import { Box, Button, Flex, Image, useToast } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import { useDispatch, useSelector } from "react-redux";

import ReactTable from "../PaginatedTable/ReactTable";
import moment from "moment";
import { addJob, setAllJobs } from "@/Reudx/slices/jobPost";
import DeleteModal from "../DeleteModal/DeleteModal";
import { put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
const ActiveJobs = () => {
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();
  // const [pauseJob, setPauseJob] = useState(false)
  const [state, setState] = useState({
    pauseJob: false,
    loading: false,
    closeJob: false,
  });
  const jobState = useSelector((state) => state.jobPost.jobs.activeJobs);
  const allJobState = useSelector((state) => state.jobPost.jobs.allJobs);
  console.log("jobState", jobState);
  const handleEdit = (data) => {
    router.push(`/company/create-job-post?id=${data.id}`);
    dispatch(addJob({ ...data, ...data.location }));
  };
  const handlePause = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await put(`${endPoints.jobs}/${state.pauseJob.id}`, {
        active: false,
        status: 0,
      });
      console.log("postData", postData);

      if (postData) {
        toast({
          position: "bottom-right",
          title: "job paused successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            pauseJob: false,
          };
        });
        dispatch(
          setAllJobs([
            ...allJobState.map((item) =>
              item.id === postData.data.id ? postData.data : item
            ),
          ])
        );
      }
    } catch (err) {
      console.log("err", err);
      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const handleCloseJob = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await put(`${endPoints.jobs}/${state.pauseJob.id}`, {
        active: false,
        status: -1,
      });
      console.log("postData", postData);

      if (postData) {
        toast({
          position: "bottom-right",
          title: "job paused successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            pauseJob: false,
          };
        });
        dispatch(
          setAllJobs([
            ...allJobState.map((item) =>
              item.id === postData.data.id ? postData.data : item
            ),
          ])
        );
      }
    } catch (err) {
      console.log("err", err);
      setState((prev) => {
        return {
          ...prev,
          loading: false,
        };
      });
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };

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
            {
              title: "Pause",
              handleEvent: () => setState({ ...state, pauseJob: original }),
            },
            {
              title: "Close job",
              handleEvent: () => setState({ ...state, closeJob: original }),
            },
          ];
          return <Popovers actionList={actionList} />;
        },
      },
    ],
    []
  );

  return (
    <>
      <DeleteModal
        name={state?.pauseJob?.title}
        loading={state.loading}
        handleDelete={handlePause}
        isOpen={state.pauseJob}
        onClose={() =>
          setState((prev) => {
            return { ...prev, pauseJob: false };
          })
        }
        deleteBtnLabel={"pause"}
      />
      <DeleteModal
        name={state?.closeJob?.title}
        loading={state.loading}
        handleDelete={handleCloseJob}
        isOpen={state.closeJob}
        onClose={() =>
          setState((prev) => {
            return { ...prev, closeJob: false };
          })
        }
        deleteBtnLabel={"Close"}
      />
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
