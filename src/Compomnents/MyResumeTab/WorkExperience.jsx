import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import DeleteModal from "../DeleteModal/DeleteModal";
import ExperianceForm from "../CandidateTimeline/ExperianceForm";
import { ExpCardLoading } from "../LoadingSkeleton/LoadingSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, setFormData } from "@/Reudx/slices/employee";
import { workExperience } from "@/schema/stateSchema";
import { deleteApi } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";

const WorkExperience = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const [state, setState] = useState({
    add: false,
    loading: false,
    edit: false,
    delete: false,
  });

  const handleEditSingleExp = (data) => {
    setState((prev) => {
      return {
        ...prev,
        edit: true,
      };
    });
    dispatch(setFormData(data));
  };
  const handleAddNew = (data) => {
    setState((prev) => {
      return { ...prev, add: true };
    });
    dispatch(setFormData(workExperience));
  };
  const handleDelete = async () => {
    setState((prev) => {
      return { ...prev, loading: true };
    });
    try {
      const postData = await deleteApi(
        `${endPoints.workExperience}/${state.delete.id}`
      );
      if (postData.success) {
        dispatch(
          addEmployee({
            ...employeeState,
            workExperience: employeeState.workExperience.filter(
              (item) => item.id !== postData.data.id
            ),
          })
        );
        setState((prev) => {
          return { ...prev, delete: false, loading: false };
        });
      }
      toast({
        position: "bottom-right",
        title: postData.message,
        status: postData.success ? "success" : "error",
        variant: "subtle",
        isClosable: true,
      });
    } catch (err) {
      console.log("err", err);
      setState((prev) => {
        return { ...prev, loading: false };
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
  return (
    <Box>
      <DeleteModal
        onOpen={() =>
          setState((prev) => {
            return { ...prev, delete: true };
          })
        }
        name={state.delete.companyName}

        loading={state.loading}
        handleDelete={handleDelete}
        isOpen={state.delete}
        onClose={() =>
          setState((prev) => {
            return { ...prev, delete: false };
          })
        }
      />
      {state.add || state.edit ? (
        <Box width={{ md: "70%", base: "100%" }} mx={"auto"} mt={'50px'}>
          <ExperianceForm state={state} setState={setState} />
        </Box>
      ) : employeeState?.workExperience.length > 0 ? (
        <Box
          mt={"30px"}
          minHeight={"63vh"}
          width={{ lg: "73%", base: "100%" }}
          mx={"auto"}
        >
          {!employeeState?.workExperience ? (
            <ExpCardLoading />
          ) : (
            employeeState?.workExperience.map((item, ind) => {
              return (
                <Box key={ind}>
                  <ExperianceCard
                    handleEdit={() => handleEditSingleExp(item)}
                    handleDelete={() => {
                      setState((prev) => {
                        return {
                          ...prev,
                          delete: item,
                        };
                      });
                    }}
                    data={item}
                    state={state}
                    setState={setState}
                  />
                </Box>
              );
            })
          )}

          <Flex justifyContent={"center"}>
            <Button
              onClick={handleAddNew}
              width="max-content"
              px={"12px"}
              mt={{ md: "41px", base: "20px" }}
              variant={"blue-btn"}
            >
              Add New Experience
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box minHeight={"68vh"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={handleAddNew
            }
            title={"Ready to build an impressive resume?"}
            subittle={"Start by including your work experiences."}
            btnLable={"Add  Experience"}
          />
        </Box>
      )}
    </Box>
  );
};

export default WorkExperience;
