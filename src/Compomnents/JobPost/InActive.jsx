import { Box, Button, Flex, Image, useToast } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";

import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import { useDispatch, useSelector } from "react-redux";

import ReactTable from "../PaginatedTable/ReactTable";
import moment from "moment";
import { addJob, setAllJobs } from "@/Redux/slices/jobPost";
import DeleteModal from "../DeleteModal/DeleteModal";
import { deleteApi, put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { status } from "@/Utils/role";
const InActive = () => {
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();
  // const [activeJob, setPauseJob] = useState(false)
  const [state, setState] = useState({
    activeJob: false,
    loading: false,
    deleteJob: false,
  });
  const jobState = useSelector((state) => state.jobPost.jobs.inActiveJobs);
  const allJobState = useSelector((state) => state.jobPost.jobs.allJobs);
  console.log("jobState", jobState);
  const handleEdit = (data) => {
    router.push(`/company/create-job-post?id=${data.id}`);
    dispatch(addJob({ ...data, ...data.location }));
  };
  const handleActive = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await put(`${endPoints.jobs}/${state.activeJob.id}`, {
        active: true,
        status: status.active,
      });
      console.log("postData", postData);

      if (postData) {
        toast({
          position: "bottom-right",
          title: "job active successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            activeJob: false,
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
  const handleDeleteJob = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await deleteApi(
        `${endPoints.jobs}/${state.deleteJob.id}`
      );
      console.log("postData", postData);

      if (postData) {
        toast({
          position: "bottom-right",
          title: "job delete successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            deleteJob: false,
          };
        });
        dispatch(
          setAllJobs([
            ...allJobState.filter(
              (item) =>
                // item.id === postData.data.id ? postData.data : item
                item.id !== postData.data.id
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
        header: "Applicants",
        cell: ({ row: { original } }) => original?._count?.applications,
      },
      {
        accessorKey: "spent",
        header: "Spent",
        cell: ({ row: { original } }) => original?.spent ?? "-",
      },
      {
        accessorKey: "updatedAt",
        header: "Updated On",
        cell: ({ row: { original } }) => {
          {
            return moment(original.updatedAt).format("YYYY-MM-DD");
          }
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row: { original } }) => {
          {
            return original.status == status.expire
              ? "Expire"
              : original.status == status.pause
              ? "Paused"
              : "Draft";
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
              title: "Activate",
              handleEvent: () => setState({ ...state, activeJob: original }),
            },
            {
              title: "Delete Job",
              handleEvent: () => setState({ ...state, deleteJob: original }),
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
        name={state?.activeJob?.title}
        loading={state.loading}
        handleDelete={handleActive}
        isOpen={state.activeJob}
        onClose={() =>
          setState((prev) => {
            return { ...prev, activeJob: false };
          })
        }
        deleteBtnLabel={"Active"}
      />
      <DeleteModal
        name={state?.deleteJob?.title}
        loading={state.loading}
        handleDelete={handleDeleteJob}
        isOpen={state.deleteJob}
        onClose={() =>
          setState((prev) => {
            return { ...prev, deleteJob: false };
          })
        }
        // deleteBtnLabel={""}
      />
      <Box minH={"78vh"} pb={"20px"}>
        <ReactTable columns={columns} data={jobState} />
      </Box>
    </>
  );
};

export default InActive;
