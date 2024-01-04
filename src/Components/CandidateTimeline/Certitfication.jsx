import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";

import CertificationForm from "./CertificateForm";
import CeritifcateCard from "../CeritifcateCard/CeritifcateCard";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, setFormData } from "@/Redux/slices/employee";
import { certification } from "@/schema/stateSchema";
import { deleteApi } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import DeleteModal from "../DeleteModal/DeleteModal";
import { ExpCardLoading } from "../LoadingSkeleton/LoadingSkeleton";

const Certification = ({ prevStep, nextStep }) => {
  const style = {
    maxWidth: "240px",
  };
  const certificationData = [
    {
      certificateName: "Diploma Name",
      organizationName: "Jobreef Professional Academy",
      noExpiry: false,
      readOnly: false,
      certificateId: "2f8ae5bfaa4c46dc3bba77655",
      issuedOn: new Date(),
      country: " USA",
      state: "Chicago",
      city: " Illinois",
      validUntil: new Date(),
    },
    {
      certificateName: "Diploma Name",
      organizationName: "Jobreef Professional Academy",
      noExpiry: false,
      readOnly: false,
      certificateId: "2f8ae5bfaa4c46dc3bba77655",
      issuedOn: new Date(),
      country: " USA",
      state: "Chicago",
      city: " Illinois",
      validUntil: new Date(),
    },
  ];

  const dispatch = useDispatch();
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const toast = useToast();

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
    dispatch(setFormData(certification));
  };
  const handleDelete = async () => {
    setState((prev) => {
      return { ...prev, loading: true };
    });
    try {
      const postData = await deleteApi(
        `${endPoints.certification}/${state.delete.id}`
      );
      if (postData.success) {
        dispatch(
          addEmployee({
            ...employeeState,
            certification: employeeState.certification.filter(
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
        name={state.delete.certificateName}
        loading={state.loading}
        onOpen={() =>
          setState((prev) => {
            return { ...prev, delete: true };
          })
        }
        isOpen={state.delete}
        onClose={() =>
          setState((prev) => {
            return { ...prev, delete: false };
          })
        }
      />
      {state.add || state.edit ? (
        <Box display={"flex"} justifyContent={"center"}>
          <CertificationForm state={state} setState={setState} />
        </Box>
      ) : (
        <Box width={"100%"} mx={"auto"}>
          {!employeeState?.certification ? (
            <ExpCardLoading />
          ) : (
            employeeState?.certification?.map((item) => {
              return (
                <Box>
                  <CeritifcateCard
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
                    headingStyle={style}
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
              px={"20px"}
              mt={{ md: "17px", base: "15px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add Certification
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
                {" Back"}
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

export default Certification;
