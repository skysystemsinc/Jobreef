import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import DeleteModal from "../DeleteModal/DeleteModal";
import AchievementForm from "./AchievementForm";
import AchievementCard from "../AchievementCard/AchievementCard";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, setFormData } from "@/Reudx/slices/employee";
import { achievement } from "@/schema/stateSchema";
import { deleteApi } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { ExpCardLoading } from "../LoadingSkeleton/LoadingSkeleton";

const Achievement = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const [state, setState] = useState({
    add: false,

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
    dispatch(setFormData(achievement));
  };
  const handleDelete = async () => {
    setState((prev) => {
      return { ...prev, loading: true };
    });
    try {
      const postData = await deleteApi(
        `${endPoints.achievement}/${state.delete.id}`
      );
      if (postData.success) {
        dispatch(
          addEmployee({
            ...employeeState,
            achievement: employeeState.achievement.filter(
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
        name={state.delete.name}
        loading={state.loading}
        handleDelete={handleDelete}
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
          <AchievementForm state={state} setState={setState} />
        </Box>
      ) : employeeState?.achievement?.length > 0 ? (
        <Box
          mt={"30px"}
          minHeight={"63vh"}
          width={{ lg: "73%", base: "100%" }}
          mx={"auto"}
        >
          {!employeeState?.achievement ? (
            <ExpCardLoading />
          ) : (
            employeeState?.achievement.map((item, ind) => {
              return (
                <Box key={ind}>
                  <AchievementCard
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
              mt={{ md: "41px", base: "20px" }}
              variant={"blue-btn"}
            >
              Add Award
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box minHeight={"68vh"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={handleAddNew}
            title={"Show-off Your Accomplishments"}
            subittle={"Add Your Notable Awards."}
            btnLable={"Add Award"}
          />
        </Box>
      )}
    </Box>
  );
};

export default Achievement;
