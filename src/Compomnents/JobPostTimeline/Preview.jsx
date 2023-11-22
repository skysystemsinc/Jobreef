import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import JobBio from "./JobBio";
import TechnicalDetails from "./TechnicalDetails";
import JobLocation from "./JobLocation";
import DesiredSkills from "./DesiredSkills";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";

const Preview = ({ isEdit, state, setState }) => {
  const router = useRouter();
  const boxStyle = {
    // border:'1px solid red',
    padding: { md: "36px 36px 5px 36px", base: "15px 15px 5px 15px" },
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: " 0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
    // box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);

    marginBottom: { md: "60px", base: "36px" },
  };
  const handleCancel = () => {
    if (isEdit) {
      router.push("/operator/job-posts");
    } else {
      router.push("/company/job-posts");
    }
  };
  const handleJob = () => {
    if (isEdit) {
      router.push("/operator/job-posts");
    } else {
      router.push("/company/job-posts");
    }
  };
  return (
    <Box>
      <Box sx={boxStyle}>
        <JobBio state={state} setState={setState} />
      </Box>
      <Box sx={boxStyle}>
        <TechnicalDetails state={state} setState={setState} />
      </Box>
      <Box sx={boxStyle}>
        <JobLocation state={state} setState={setState} />
      </Box>
      <Box sx={{ ...boxStyle, marginBottom: "40px" }}>
        <DesiredSkills state={state} setState={setState} />
      </Box>

      {isEdit ? null : (
        <Button
          onClick={() => router.push("/company/job-post")}
          variant={"blue-btn"}
        >
          {"Save as Draft"}
        </Button>
      )}
      <Flex
        width="100%"
        justify="center"
        mt={{ md: "15px", base: "0px" }}
        mb={"30px"}
        gap={4}
      >
        <Button onClick={handleCancel} variant="outline-blue">
          {"Cancel"}
        </Button>
        <Button onClick={handleJob} variant={"blue-btn"}>
          {isEdit ? "Update Job" : "Post job"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Preview;
