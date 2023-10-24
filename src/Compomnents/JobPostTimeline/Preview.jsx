import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import JobBio from "./JobBio";
import TechnicalDetails from "./TechnicalDetails";
import JobLocation from "./JobLocation";
import DesiredSkills from "./DesiredSkills";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";

const Preview = ({ state, setState }) => {
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
      <Box sx={{...boxStyle , marginBottom:"40px"}}>
        <DesiredSkills state={state} setState={setState} />
        {/* <InputWrapper >
          <LabelInput
            // readOnly={readOnly}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Desired Skills"
            // dropdown={readOnly ? false : true}
            label={"Desired Skills"}
          />

          <LabelInput
            labelVariant={"label"}
            type="text"
            dropdown
            variant={"bg-input"}
            // readOnly={readOnly}
            placeholder="Select Tags for Job Post"
            label={"Tags"}
          />
        </InputWrapper> */}
      </Box>
      <Button
        onClick={() => router.push("/company/job-post")}
        variant={"blue-btn"}
      >
        {"Save as Draft"}
      </Button>
      <Flex
        width="100%"
        justify="center"
        mt={{ md: "15px", base: "0px" }}
        mb={"30px"}
        gap={4}
      >
        <Button
          onClick={() => router.push("/company/job-post")}
          variant="outline-blue"
        >
          {"Cancel"}
        </Button>
        <Button
          onClick={() => router.push("/company/job-post")}
          variant={"blue-btn"}
        >
          {"Post job"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Preview;
