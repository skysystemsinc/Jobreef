import React, { useState } from "react";
import UploadBox from "../UploadBox/UploadBox";
import { Box, Button, Flex } from "@chakra-ui/react";
import UploadedCard from "../UploadedCard/UploadedCard";
import dummy_resume from "@/assets/Images/dummy_resume.svg";

// import dummy_resume from "@/assets/pdf/dummy.pdf";
const UploadFile = ({ style, data }) => {
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
                  url: e.target.result,

                  name: file.name,
                },
              ],
              [key]: [
                ...prev[key],
                {
                  url: e.target.result,
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
  const handleSave = () => {
    setState((prev) => {
      return {
        ...prev,
        save: true,
        select: false,
      };
    });
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
    setState((prev) => {
      return {
        ...prev,
        resume: data.resume,
        additional: data.additional,
        allFile: [...data.resume, ...data.additional],
      };
    });
  }, []);

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
              Save
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

export default UploadFile;
