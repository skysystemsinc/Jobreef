import { Box, Button, Flex, Image, useToast } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import PaginatedTable from "../PaginatedTable/PaginatedTable";
import menu from "@/assets/Images/menu.svg";
import { useRouter } from "next/router";
import Popovers from "../PaginatedTable/Popovers";
import { addFormData, getTeamMembers, teamMemberList } from "@/Redux/slices/teamMembers";
import { useDispatch, useSelector } from "react-redux";
import ReactTable from "../PaginatedTable/ReactTable";
import DeleteModal from "../DeleteModal/DeleteModal";
import { put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { roles } from "@/Utils/role";
const TeamMembers = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.teamMembers.value.allMembers);
  const companyState = useSelector((state) => state.companyRegister.value);
  const loginUser = useSelector((state) => state.LoginUser.value);

  const [state, setState] = useState({
    activeUser: false,
    disableUser: false,
  });
  console.log("state", userState);
  const router = useRouter();

  const handleActiveUser = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await put(`${endPoints.user}/${state.activeUser.id}`, {
        active: true,
      });
      if (postData) {
        toast({
          position: "bottom-right",
          title: "user Active successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            activeUser: false,
          };
        });
        dispatch(
          getTeamMembers([
            ...userState.map((item) =>
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
  const handleDisableUser = async () => {
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    try {
      const postData = await put(`${endPoints.user}/${state.disableUser.id}`, {
        active: false,
      });
      if (postData) {
        toast({
          position: "bottom-right",
          title: "user Disable successfully",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            disableUser: false,
          };
        });
        dispatch(
          getTeamMembers([
            ...userState.map((item) =>
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
  const handleEdit = (data) => {
    dispatch(addFormData(data))
    router.push(`/company/add-members?id=${data.id}`);
  };
  useEffect(() => {
    if (loginUser.id ) {
      dispatch(teamMemberList(loginUser.id));
    }
  }, [loginUser]);
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: ({ row: { original } }) =>
          original.firstName + " " + original.lastName,
      },
      {
        accessorKey: "email",
        header: "Email",
        // cell: ({ row: { original } }) =>
        //   original.employmentType === "" ? "-" : original.employmentType,
      },
      {
        accessorKey: "jobTitle",
        header: "Job Title",
        // original.employeeRole === "" ? "-" : original.employeeRole,
        cell: ({ row: { original } }) => original.jobTitle ?? "-",
      },
      {
        accessorKey: "role",
        header: "Role",
        // cell: ({ row: { original } }) => original.opening,
        cell: ({ row: { original } }) => (
          <Box as="span" textTransform={"capitalize"}>
            {original.role == roles.company
              ? "Company Administrator"
              : original.role ?? "-"}
          </Box>
        ),
      },

      {
        accessorKey: "active",
        header: "Status",
        // original.employeeRole === "" ? "-" : original.employeeRole,
        cell: ({ row: { original } }) =>
          !original.active
            ? "Disable"
            : !original.inviteAccepted
            ? "Invite Pending"
            : original.active
            ? "Active"
            : "Disable",
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row: { original } }) => {
          const activeActionList = [
            { title: "Edit", handleEvent: () => handleEdit(original) },
            {
              title: "Disable",
              handleEvent: () => setState({ ...state, disableUser: original }),
            },
          ];
          const disableActionList = [
            { title: "Edit", handleEvent: () => handleEdit(original) },
            {
              title: "Active",
              handleEvent: () => setState({ ...state, activeUser: original }),
            },
          ];
          return (
            <Popovers
              actionList={
                original.active ? activeActionList : disableActionList
              }
            />
          );
        },
      },
    ],
    []
  );
  return (
    <>
      <DeleteModal
        name={state?.activeUser?.title}
        loading={state.loading}
        handleDelete={handleActiveUser}
        isOpen={state.activeUser}
        onClose={() =>
          setState((prev) => {
            return { ...prev, activeUser: false };
          })
        }
        deleteBtnLabel={"Active"}
      />
      <DeleteModal
        name={state?.disableUser?.title}
        loading={state.loading}
        handleDelete={handleDisableUser}
        isOpen={state.disableUser}
        onClose={() =>
          setState((prev) => {
            return { ...prev, disableUser: false };
          })
        }
        deleteBtnLabel={"Disable"}
      />
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
        <Box mb={"60px"}>
          <ReactTable columns={columns} data={userState} />
        </Box>
      </Box>
    </>
  );
};

export default TeamMembers;
