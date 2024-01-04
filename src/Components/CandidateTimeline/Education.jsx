import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";

import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../DeleteModal/DeleteModal";
import { addEmployee, setFormData } from "@/Redux/slices/employee";
import { education } from "@/schema/stateSchema";
import { deleteApi } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { ExpCardLoading } from "../LoadingSkeleton/LoadingSkeleton";
const educationData = [
  {
    schoolName: "Walter Payton College Preparatory High School",
    diploma: "Diploma Name",
    readOnly: false,
    stateDate: new Date(),
    endDate: new Date(),
    currentlyEnrolled: false,
    country: " USA",
    state: "Chicago",
    city: " Illinois",
    streetAddress: "",
    gpa: "",
    description:
      "Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability. Requirements Analysis: Collaborate with stakeholders, customers, and cross-functional teams to gather and analyze system requirements, ensuring clear and unambiguous specifications. Oversee the integration",
  },
  {
    schoolName: "Walter Payton College Preparatory High School",
    diploma: "Diploma Name",
    readOnly: false,
    stateDate: new Date(),
    endDate: new Date(),
    country: " USA",
    currentlyEnrolled: false,
    state: "Chicago",
    city: " Illinois",
    streetAddress: "",
    gpa: "",
    description:
      "Lead the design and development of system architectures, ensuring they meet the project requirements, performance criteria, and scalability. Requirements Analysis: Collaborate with stakeholders, customers, and cross-functional teams to gather and analyze system requirements, ensuring clear and unambiguous specifications. Oversee the integration",
  },
];
const Education = ({
  showAddText,
  containerStyle,
  disableNextButton,
  prevStep,
  nextStep,
}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );

  const [state, setState] = useState({
    edit: false,
    loading: false,
    delete: false,
    add: false,
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
  const handleNext = () => {
    // TODO will update stages
    nextStep();
  };

  const style = {
    maxWidth: "216px",
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
        <Box display={"flex"} justifyContent={"center"}>
          <EducationForm state={state} setState={setState} />
        </Box>
      ) : (
        <Box width={"100%"} mx={"auto"}>
          <Box>
            {!employeeState?.education ? (
              <ExpCardLoading />
            ) : (
              employeeState?.education?.map((item) => {
                return (
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
                    headingStyle={style}
                    disableBlueCard
                    data={item}
                  />
                );
              })
            )}
          </Box>

          <Flex justifyContent={"center"}>
            <Button
              onClick={handleAddNew}
              px={"10px"}
              width="max-content"
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add New Education
            </Button>
          </Flex>

          <Flex
            width="100%"
            justify="center"
            mt={{ md: "43px", base: "3px" }}
            pb={"30px"}
            gap={4}
          >
            <Button onClick={prevStep} variant="outline-blue">
              {"Back"}
            </Button>
            <Button onClick={handleNext} variant={"blue-btn"}>
              Next
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Education;
