import React, { useState } from "react";
import UploadBox from "../UploadBox/UploadBox";
import { Box, Button, Checkbox, Flex, Heading } from "@chakra-ui/react";
import UploadedCard from "../UploadedCard/UploadedCard";
import dummy_resume from "@/assets/Images/dummy_resume.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";

// import dummy_resume from "@/assets/pdf/dummy.pdf";
const AchievementForm = ({ style , handleSaveAch}) => {
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
  const handleSingleFile = (event, key, ind) => {
    console.log("index", ind);
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedObject = {
          pdfUrl: e.target.result,
          uploadProgress: 100,
          pdfFile: selectedFile,
        };
        setState((prev) => {
          const allFile = [...prev.allFile]; // Create a copy of the allFile array
          const keyAllFile = [...prev[key]]; // Create a copy of the allFile array
          console.log("ind", allFile);
          allFile.splice(ind, 1, updatedObject);
          keyAllFile.splice(ind, 1, updatedObject);

          return {
            select: true,
            // [key]: true,
            allFile: allFile,
            [key]: keyAllFile,
          };
        });
      };
      reader.readAsDataURL(selectedFile);
    }
    // selectedFile.map((file, index) => {
    // });
  };

  const handleUpload = (event, key, index) => {
    //TODO make dynamic progress barr with axios
    console.log("runn", key);

    if (index !== undefined) {
      console.log("handleSingleFile", index);
      handleSingleFile(event, key, index);
    } else {
      console.log("else", index);

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
                    pdfUrl: e.target.result,
                    uploadProgress: 100,
                    pdfFile: file,
                  },
                ],
                [key]: [
                  ...prev[key],
                  {
                    uploadProgress: 100,
                    pdfUrl: e.target.result,
                    pdfFile: file,
                  },
                ],
              };
            });
          };
          reader.readAsDataURL(file);
        }
      });
    }
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
      console.log("ind", prev);
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
  return (
    <Box minHeight={"59vh"}>
      <Box width={{ md: "60%", base: "100%" }} mx={"auto"} mt={"50px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            // state={certification.certificateName}
            // setState={(e) => {
            //   setCertification((prev) => {
            //     return { ...prev, certificateName: e.target.value };
            //   });
            // }}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of your certificate"
            label={"Name of Achievement"}
          />
          <LabelInput
            labelVariant={"label"}
            // state={certification.organizationName}
            // setState={(e) => {
            //   setCertification((prev) => {
            //     return { ...prev, organizationName: e.target.value };
            //   });
            // }}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of issuing organization"
            label={"Issuing Organization"}
          />
        </InputWrapper>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <Box width={{ md: "49%", base: "100%" }}>
            <LabelInput
              labelVariant={"label"}
              // state={certification.certificateName}
              // setState={(e) => {
              //   setCertification((prev) => {
              //     return { ...prev, certificateName: e.target.value };
              //   });
              // }}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              label={"Issued On"}
            />
          </Box>
        </InputWrapper>
      </Box>
      {state.select ? (
        <Box mt={"60px"}>
          <Box width={{ md: " 60%", base: "100%" }} mx={"auto"} sx={style}>
            {state.allFile.map((item, ind) => {
              return (
                <Box mb={"15px"}>
                  <UploadedCard
                    handleDelete={
                      () => {
                        if (item.resume) {
                          handleDelete(ind, "resume");
                        } else {
                          handleDelete(ind, "additional");
                        }
                      }

                      // handleDelete(ind , "additional")
                    }
                    // pdfPreview={state.pdfUrl}

                    fileName={item.pdfFile.name}
                    handleEvent={(e) => {
                      if (item.resume) {
                        handleUpload(e, "resume", ind);
                      } else {
                        handleUpload(e, "additional", ind);
                      }
                    }}
                  />
                </Box>
              );
            })}

            {/* <UploadedCard pdfPreview={dummy_resume.src} /> */}
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
  
          {state.additional.length > 0 ? (
            <UploadBox
              handleDelete={(e) => handleDelete(e, "additional")}
              showSelectedImage={state.additional}
              // handleEvent={handleUpload}
              handleEvent={(e) => handleUpload(e, "additional")}
              titie={"Upload in Digital Format"}
              list={list}
            />
          ) : (
            <UploadBox
              handleEvent={(e) => handleUpload(e, "additional")}
              titie={"Upload in Digital Format"}
              list={list}
            />
          )}
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
            handleEvent={(e) => handleUpload(e, "additional")}
            list={list}
            titie={"Upload in Digital Format"}
          />
        </Flex>
      )}

      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={{ md: "36px", base: "10px" }}
        mt={"50px"}
        pb={"39px"}
      >
        <Button
          onClick={() => {
            handleSave();
            // tabIndex == 0 ? null : setTabIndex(--tabIndex);
          }}
          // width={"max-content"}
          // px={{ md: "30px", base: "20px" }}
          variant="outline-blue"
        >
          Cancel
        </Button>

        <Button
          onClick={() => {
            // tabIndex == 2 ? null : setTabIndex(++tabIndex);
            // router.push("/");
            handleSaveAch();
          }}
          // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
          // width={"max-content"}
          // px={{ md: "20px", base: "20px" }}

          variant={"blue-btn"}
        >
          {state.edit ? "Update  Achievement" : " Save  Achievement"}
        </Button>
      </Box>
    </Box>
  );
};

export default AchievementForm;
