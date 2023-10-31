import React, { useState } from "react";
import UploadBox from "../UploadBox/UploadBox";
import { Box, Button, Flex } from "@chakra-ui/react";
import UploadedCard from "../UploadedCard/UploadedCard";
import dummy_resume from "@/assets/Images/dummy_resume.svg";

// import dummy_resume from "@/assets/pdf/dummy.pdf";
const Attachments = () => {
  const [state, setState] = useState({
    pdfUrl: null,
    resume: false,
    additional: false,
    save: false,
    pdfFile: null,
    select: false,
    uploadProgress: 0,
  });
  const list = [
    "The acceptable file formats are PDF, Word, PNG, and JPEG files",
    "This will be included in submitted job applications",
  ];
  console.log("state", state);
  const handleUpload = (event, key) => {
    const selectedFile = event.target.files[0];
    setState((prev) => {
      return {
        ...prev,
        pdfFile: selectedFile,

        select: true,
        [key]: {
          pdfFile: selectedFile,
        },
        // save: false,
      };
    });

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // setPdfUrl(e.target.result);
        setState((prev) => {
          return {
            ...prev,
            pdfUrl: e.target.result,

            [key]: {
              ...prev[key],
              pdfUrl: e.target.result,
            },
          };
        });
      };

      reader.onprogress = (e) => {
        if (e.lengthComputable) {
          const percentUploaded = (e.loaded / e.total) * 100;
          setState((prev) => {
            return {
              ...prev,
              uploadProgress: percentUploaded,

              [key]: {
                ...prev[key],
                // pdfUrl: e.target.result,
                uploadProgress: percentUploaded,
              },
            };
          });
        }
      };

      reader.readAsDataURL(selectedFile);
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
      };
    });
  };
  return (
    <Box minHeight={"59vh"}>
      {state.select ? (
        <Box mt={"60px"}>
          <Box width={{md: " 60%", base:"100%"}} mx={"auto"}>
            <UploadedCard
              // pdfPreview={state.pdfUrl}
              uploadProgress={state.uploadProgress}
              fileSize={state.pdfFile.size}
              fileName={state.pdfFile.name}
              handleEvent={(e) => {
                if (state.resume) {
                  handleUpload(e, "resume");
                } else {
                  handleUpload(e, "additional");
                }
              }}
            />

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
          {state.resume ? (
            <Box width={{ lg: "40%" , base:"100%"}}>
              <UploadedCard
                pdfPreview={state.resume.pdfUrl}
                uploadProgress={state.resume.uploadProgress}
                fileSize={state.resume.pdfFile.size}
                fileName={state.resume.pdfFile.name}
                // handleEvent={handleUpload}
                handleEvent={(e) => handleUpload(e, "resume")}
              />
            </Box>
          ) : (
            <UploadBox
              handleEvent={(e) => handleUpload(e, "resume")}
              titie={"Upload Resume File"}
              list={list}
            />
          )}
          {state.additional ? (
            <Box width={{ lg: "40%" , base:"100%"}}>
              <UploadedCard
                pdfPreview={state.additional.pdfUrl}
                uploadProgress={state.additional.uploadProgress}
                fileSize={state.additional.pdfFile.size}
                fileName={state.additional.pdfFile.name}
                // handleEvent={handleUpload}
                handleEvent={(e) => handleUpload(e, "additional")}
              />
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
