import React, { useEffect, useState } from "react";
import UploadBox from "../UploadBox/UploadBox";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import UploadedCard from "../UploadedCard/UploadedCard";
import dummy_resume from "@/assets/Images/dummy_resume.svg";
import { useDispatch, useSelector } from "react-redux";
import { post } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { addEmployee } from "@/Redux/slices/employee";
import Loader from "../Loader/Loader";

// import dummy_resume from "@/assets/pdf/dummy.pdf";
const Attachments = ({ style }) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();

  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const [state, setState] = useState({
    resume: [],
    additional: [],
    allFile: [],
    save: false,
    select: false,
  });
  const list = [
    "The acceptable file formats are PDF, Word, PNG, and JPEG files",
    "This will be included in submitted job applications",
  ];

  const handleUpload = (event, key, index) => {
    const selectedFile = Array.from(event.target.files);
    selectedFile.map((file, index) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setState((prev) => {
            console.log("...prev[key],", key);
            return {
              ...prev,
              select: true,
              // [key]: true,
              allFile: [
                ...prev.allFile,
                {
                  // url: e.target.result,
                  url: "",

                  name: file.name,
                },
              ],
              [key]: [
                ...prev[key],
                {
                  // url: e.target.result,
                  url: "",
                  name: file.name,
                },
              ],
            };
          });
        };
        reader.readAsDataURL(file);
      }
    });
  };
  const handleSave = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const body = {
        resume: state.resume,
        additional: state.additional,
        employeeId: employeeState.id,
        id: employeeState?.attachments?.id,
      };
      const postData = await post(`${endPoints.attachment}`, body);
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return {
            ...prev,
            save: true,
            select: false,
          };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            attachments: postData.data,
          })
        );
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
      setLoading(false);
      toast({
        position: "bottom-right",
        title: "Error",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const handleCancel = () => {
    setState((prev) => {
      return {
        ...prev,
        save: false,
        select: false,
        resume: [],
        additional: [],
        allFile: [],
      };
    });
  };
  const handleDelete = (ind, key) => {
    setState((prev) => {
      const allFile = [...prev.allFile]; // Create a copy of the allFile array
      const keyAllFile = [...prev[key]]; // Create a copy of the allFile array
      allFile.splice(ind, 1);
      keyAllFile.splice(ind, 1);
      if (allFile.length == 0) {
        return {
          ...prev,
          select: false,
          // [key]: true,
          save: false,
          allFile: allFile,
          [key]: keyAllFile,
        };
      } else {
        return {
          ...prev,
          // select: false,
          allFile: allFile,
          [key]: keyAllFile,
        };
      }
    });
  };

  useEffect(() => {
    const data = employeeState.attachments;
    if (data) {
      setState((prev) => {
        return {
          ...prev,
          resume: data.resume,
          additional: data.additional,
          allFile: [...data.resume, ...data.additional],
        };
      });
    }
  }, [employeeState]);
  return (
    <Box minHeight={"59vh"}>
      {state.select ? (
        <Box mt={"60px"}>
          <Box width={{ md: " 60%", base: "100%" }} mx={"auto"} sx={style}>
            {state.allFile.map((item, ind) => {
              return (
                <Box mb={"15px"}>
                  <UploadedCard
                    handleDelete={() => {
                      if (item.resume) {
                        handleDelete(ind, "resume");
                      } else {
                        handleDelete(ind, "additional");
                      }
                    }}
                    fileName={item.name}
                  />
                </Box>
              );
            })}
          </Box>
          <Flex justifyContent={"center"} gap={"20px"} mt={"43px"}>
            <Button onClick={handleCancel} variant="outline-blue">
              Cancel
            </Button>
            <Button onClick={handleSave} variant={"blue-btn"}>
              {loading ? <Loader /> : "Save"}
            </Button>
          </Flex>
        </Box>
      ) : state.save ? (
        <Flex
          mt={{ md: "50px", base: "20px" }}
          alignItems={"flex-start"}
          gap={{ md: "30px", base: "10px" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <UploadBox
            handleDelete={(e) => handleDelete(e, "resume")}
            showSelectedImage={state.resume}
            handleEvent={(e) => handleUpload(e, "resume")}
            titie={"Upload Resume File"}
            list={list}
          />

          <UploadBox
            handleDelete={(e) => handleDelete(e, "additional")}
            showSelectedImage={state.additional}
            handleEvent={(e) => handleUpload(e, "additional")}
            titie={"Upload Additional Files (e.g. Cover Letter or ID)"}
            list={list}
          />
        </Flex>
      ) : (
        <Flex
          mt={{ md: "50px", base: "20px" }}
          alignItems={"center"}
          gap={{ md: "30px", base: "10px" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <UploadBox
            handleEvent={(e) => handleUpload(e, "resume")}
            titie={"Upload Resume File"}
            list={list}
          />

          <UploadBox
            handleEvent={(e) => handleUpload(e, "additional")}
            list={list}
            titie={"Upload Additional Files (e.g. Cover Letter or ID)"}
          />
        </Flex>
      )}
    </Box>
  );
};

export default Attachments;
