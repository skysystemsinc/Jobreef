import React, { useState } from "react";
import UploadBox from "../UploadBox/UploadBox";
import { Box, Button, Flex } from "@chakra-ui/react";
import UploadedCard from "../UploadedCard/UploadedCard";
import dummy_resume from "@/assets/Images/dummy_resume.svg";

// import dummy_resume from "@/assets/pdf/dummy.pdf";
const Attachments = ({ style }) => {
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
              console.log("...prev[key],",key);
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
      console.log("ind",prev);
      allFile.splice(ind, 1);
      keyAllFile.splice(ind, 1);
      if (allFile.length == 0) {
        return {
          ...prev,
          select: false,
          // [key]: true,
          save:false,
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
                    uploadProgress={item.uploadProgress}
                    fileSize={item.pdfFile.size}
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
          {state.resume.length > 0 ? (
            <Box width={{ lg: "40%", base: "100%" }} sx={style}>
              {state.resume.map((item, ind) => {
                return (
                  <Box mb={"10px"}>
                    <UploadedCard
                      handleDelete={() => handleDelete(ind, "resume")}
                      pdfPreview={item.pdfUrl}
                      uploadProgress={item.uploadProgress}
                      fileSize={item.pdfFile.size}
                      fileName={item.pdfFile.name}
                      // handleEvent={handleUpload}
                      handleEvent={(e) => handleUpload(e, "resume", ind)}
                    />
                  </Box>
                );
              })}
            </Box>
          ) : (
            <UploadBox
              handleEvent={(e) => handleUpload(e, "resume")}
              titie={"Upload Resume File"}
              list={list}
            />
          )}
          {state.additional.length > 0 ? (
            <Box width={{ lg: "40%", base: "100%" }} sx={style}>
              {state.additional.map((item, ind) => {
                return (
                  <Box mb={"10px"}>
                    <UploadedCard
                      handleDelete={() => handleDelete(ind, "additional")}
                      pdfPreview={item.pdfUrl}
                      uploadProgress={item.uploadProgress}
                      fileSize={item.pdfFile.size}
                      fileName={item.pdfFile.name}
                      // handleEvent={handleUpload}
                      handleEvent={(e) => handleUpload(e, "additional", ind)}
                    />
                  </Box>
                );
              })}
              {/* <UploadedCard
                pdfPreview={state.additional.pdfUrl}
                uploadProgress={state.additional.uploadProgress}
                fileSize={state.additional.pdfFile.size}
                fileName={state.additional.pdfFile.name}
                // handleEvent={handleUpload}
                handleEvent={(e) => handleUpload(e, "additional")}
              /> */}
            </Box>
          ) : (
            <UploadBox
              handleEvent={(e) => handleUpload(e, "additional")}
              titie={"Upload Additional Files (e.g. Cover Letter or ID)"}
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
            // handleEvent={handleUpload}
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
