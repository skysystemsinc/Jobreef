import React from "react";
import UploadFile from "../UploadFile/UploadFile";
import { Button, Flex, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import endPoints from "@/Utils/endpoints";
import Attachments from "../MyResumeTab/Attachments";

const TimelineAttachments = ({prevStep ,nextStep}) => {

  const handleNext = async()=>{

    nextStep()
  }
  return (
    <>
      <Attachments
        
        style={{ width: { lg: "80%", base: "100%" } }}
      />
      <Flex
        width="100%"
        justify="center"
        mt={{ md: "43px", base: "3px" }}
        pb={"30px"}
        gap={4}
      >
        <Button onClick={prevStep} variant="outline-blue">
          {" Back"}
        </Button>
        <Button onClick={handleNext} variant={"blue-btn"}>
          Next
        </Button>
      </Flex>
    </>
  );
};

export default TimelineAttachments;
