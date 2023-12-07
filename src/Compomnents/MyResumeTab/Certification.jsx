import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";

import CeritifcateCard from "../CeritifcateCard/CeritifcateCard";
import DeleteModal from "../DeleteModal/DeleteModal";
import { addEmployee, setFormData } from "@/Reudx/slices/employee";
import { certification } from "@/schema/stateSchema";
import { useDispatch, useSelector } from "react-redux";
import CertificationForm from "../CandidateTimeline/CertificateForm";
import { deleteApi } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { ExpCardLoading } from "../LoadingSkeleton/LoadingSkeleton";

const Certification = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const [state, setState] = useState({
    add: false,
    edit: false,
    delete: false,
    loading: false,
  });

  const handleAddNew = (data) => {
    setState((prev) => {
      return { ...prev, add: true };
    });
    dispatch(setFormData(certification));
  };

  const handleEditSingleData = (data) => {
    setState((prev) => {
      return {
        ...prev,
        edit: true,
      };
    });
    dispatch(setFormData(data));
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
        <Box mx={"auto"} mt={"50px"} width={{ md: "70%", base: "100%" }}>
          <CertificationForm state={state} setState={setState} />
        </Box>
      ) : employeeState?.certification?.length > 0 ? (
        <Box
          minHeight={"63vh"}
          mt={"30px"}
          width={{ xl: "73%", base: "100%" }}
          mx={"auto"}
        >
          {!employeeState?.certification ? (
            <ExpCardLoading />
          ) : (
            employeeState?.certification?.map((item, ind) => {
              return (
                <Box key={ind}>
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
              mt={{ md: "61px", base: "20px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add Certification
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box minHeight={"68vh"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={handleAddNew}
            title={"Make Yourself Stand Out:"}
            subittle={"Add Your Industry Certifications and Licenses."}
            btnLable={"Add Certification"}
          />
        </Box>
      )}
    </Box>
  );
};

export default Certification;
