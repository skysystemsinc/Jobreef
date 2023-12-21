import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

import TextCard from "../TextCard/TextCard";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, setFormData } from "@/Redux/slices/employee";
import { workExperience } from "@/schema/stateSchema";
import DeleteModal from "../DeleteModal/DeleteModal";
import endPoints from "@/Utils/endpoints";
import { deleteApi } from "@/helper/fetch";
import { ExpCardLoading } from "../LoadingSkeleton/LoadingSkeleton";

const WorkExperience = ({
  containerStyle,
  showAddText,
  disableNextButton,
  prevStep,
  nextStep,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );

  const [state, setState] = useState({
    edit: false,
    loading: false,
    delete: false,
    add: false,
  });
  const experienceData = [
    {
      companyName: "Microsoft",
      designation: "Senior System’s Design Engineer",
      currentlyWorking: false,
      readOnly: false,
      stateDate: new Date(),
      endDate: new Date(),
      country: "USA",
      state: "",
      city: "",
      streetAddress: "",
      employmentType: "",
      jobFamily: "",
      jobSummary:
        "Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability. Requirements Analysis: Collaborate with stakeholders, customers, and cross-functional teams to gather and analyze system requirements,",
    },
    {
      companyName: "Microsoft",
      designation: "Senior System’s Design Engineer",
      currentlyWorking: false,
      readOnly: false,
      stateDate: new Date(),
      endDate: new Date(),
      country: "USA",
      state: "",
      city: "",
      streetAddress: "",
      employmentType: "",
      jobFamily: "",
      jobSummary:
        "Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability. Requirements Analysis: Collaborate with stakeholders, customers, and cross-functional teams to gather and analyze system requirements,",
    },
  ];
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
  const handleNext = () => {
    // TODO will update stages
    nextStep();
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
        name={state.delete.companyName}
        loading={state.loading}
        isOpen={state.delete}
        onClose={() =>
          setState((prev) => {
            return { ...prev, delete: false };
          })
        }
      />
      {state.add || state.edit ? (
        <Box mx={"auto"}>
          <ExperianceForm state={state} setState={setState} />
        </Box>
      ) : (
        <Box width={"100%"} mx={"auto"}>
          <Box>
            {!employeeState?.workExperience ? (
              <ExpCardLoading />
            ) : (
              employeeState?.workExperience?.map((item, ind) => {
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
          </Box>

          <Flex justifyContent={"center"}>
            <Button
              onClick={handleAddNew}
              width="max-content"
              px={"10px"}
              mb={{ md: "38px", base: "20px" }}
              variant={"blue-btn"}
            >
              Add New Experience
            </Button>
          </Flex>

          <Flex
            width="100%"
            justify="center"
            mt={{ md: "43px", base: "3px" }}
            pb={"30px"}
            gap={4}
          >
            <>
              <Button onClick={prevStep} variant="outline-blue">
                {"Back"}
              </Button>
              <Button onClick={handleNext} variant={"blue-btn"}>
                Next
              </Button>
            </>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export { WorkExperience };
