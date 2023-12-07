import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";

import EducationCard from "../EducationCard/EducationCard";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, setFormData } from "@/Reudx/slices/employee";
import { education } from "@/schema/stateSchema";
import { deleteApi } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import EducationForm from "../CandidateTimeline/EducationForm";
import { ExpCardLoading } from "../LoadingSkeleton/LoadingSkeleton";

const Education = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );

  const [state, setState] = useState({
    add: false,
    loading: false,

    edit: false,
    delete: false,
  });
  const handleEditSingleData = (data) => {
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
    dispatch(setFormData(education));
  };
  const handleDelete = async () => {
    setState((prev) => {
      return { ...prev, loading: true };
    });
    try {
      const postData = await deleteApi(
        `${endPoints.education}/${state.delete.id}`
      );
      if (postData.success) {
        dispatch(
          addEmployee({
            ...employeeState,
            education: employeeState.education.filter(
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
        handleDelete={handleDelete}
        onOpen={() =>
          setState((prev) => {
            return { ...prev, delete: true };
          })
        }
        name={state.delete.schoolName}
        loading={state.loading}
        isOpen={state.delete}
        onClose={() =>
          setState((prev) => {
            return { ...prev, delete: false };
          })
        }
      />
      {state.add || state.edit ? (
        <Box width={{ md: "70%", base: "100%" }} mx={"auto"} mt={"50px"}>
          <EducationForm setState={setState} state={state} />
        </Box>
      ) : employeeState?.education.length > 0 ? (
        <Box mt={"30px"} width={{ xl: "73%", base: "100%" }} mx={"auto"}>
          {!employeeState?.education ? (
            <ExpCardLoading />
          ) : (
            employeeState?.education.map((item, ind) => {
              return (
                <Box key={ind}>
                  <EducationCard
                    handleEdit={() => handleEditSingleData(item)}
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

          <Box
            bg={"blue.400"}
            boxShadow="0px 4px 20px 0px rgba(0, 0, 0, 0.06)"
            borderRadius={"8px"}
            padding={{ md: "22px 43px", base: "20px 18px" }}
          >
            <Heading variant={"p7"} color={"gray.text"}>
              {"Elevate Your Profile: Include Your Bachelor 's Degree"}
            </Heading>
          </Box>

          <Flex justifyContent={"center"}>
            <Button
              onClick={handleAddNew}
              width="max-content"
              px={"12px"}
              mt={{ md: "61px", base: "20px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add Education
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box minHeight={"68vh"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={handleAddNew}
            title={"Enrich Your Profile:"}
            subittle={"Include Your Academic Journey."}
            btnLable={"Add Education"}
          />
        </Box>
      )}
    </Box>
  );
};

export default Education;
