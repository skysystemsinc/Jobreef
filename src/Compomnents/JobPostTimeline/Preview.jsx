import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import JobBio from "./JobBio";
import TechnicalDetails from "./TechnicalDetails";
import JobLocation from "./JobLocation";
import DesiredSkills from "./DesiredSkills";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import AssignJob from "./AssigneJob";
import { post, put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { addJob, getAllJobs, setAllJobs } from "@/Reudx/slices/jobPost";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { job } from "@/schema/stateSchema";

const Preview = ({ assignJob, isEdit, state, setState }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const jobState = useSelector((state) => state.jobPost.value);
  const allJobState = useSelector((state) => state.jobPost.jobs.allJobs);
  const companyState = useSelector((state) => state.companyRegister.value);

  const boxStyle = {
    padding: { md: "36px 36px 5px 36px", base: "15px 15px 5px 15px" },
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: " 0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
    marginBottom: { md: "60px", base: "36px" },
  };
  const handleCancel = () => {
    if (isEdit) {
      router.push("/operator/job-post");
    } else {
      router.push("/company/job-post");
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const tags = jobState.tags.map((item) => {
        return item.value;
      });
      const body = {
        ...jobState,
        opening: parseInt(jobState.opening),
        location: {
          country: jobState.country,
          city: jobState.city,
          province: jobState.province,
          city: jobState.city,
        },
        tags: tags,
        companyId: companyState.id,
      };
      const postData = await post(`${endPoints.jobs}`, body);
      console.log("postData", postData);

      if (postData) {
        dispatch(setAllJobs([...allJobState, postData.data]));
        dispatch(addJob(job));
        router.push("/company/job-post");
      }
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
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const tags = jobState.tags.map((item) => {
        return item.value;
      });
      const body = {
        // ...jobState,
        title: jobState.title,
        companyId: jobState.companyId,
        employmentType: jobState.employmentType,
        locationType: jobState.locationType,
        seniorityLevel: jobState.seniorityLevel,
        applicationType: jobState.applicationType,
        externalURL: jobState.externalURL,
        jobDescription: jobState.jobDescription,
        opening: jobState.opening,
        minimumEducation: jobState.minimumEducation,
        minimumSalary: jobState.minimumSalary,
        maximumSalary: jobState.maximumSalary,
        yearsOfExperience: jobState.yearsOfExperience,
        jobFamily: jobState.jobFamily,
        rate: jobState.rate,
        tags: jobState.tags,
        location: {
          country: jobState.country,
          city: jobState.city,
          province: jobState.province,
          address: jobState.address,
        },
        desiredSkills: jobState.desiredSkills,
        applicationDeadline: jobState.applicationDeadline,
      };

      const postData = await put(`${endPoints.jobs}/${id}`, body);
      console.log("postData", postData);

      if (postData) {
        dispatch(
          setAllJobs([
            ...allJobState.map((item) =>
              item.id === postData.data.id ? postData.data : item
            ),
          ])
        );
        // dispatch(setAllJobs([...allJobState, postData.data]));
        dispatch(addJob(job));
        router.push("/company/job-post");
      }
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
  const handleCreateJob = () => {
    if (isEdit) {
      router.push("/operator/job-post");
    } else {
      handleSave();

      // router.push("/company/job-posts");
    }
  };
  return (
    <Box>
      <Box sx={boxStyle}>
        <JobBio state={state} disableNextPrev setState={setState} />
      </Box>
      <Box sx={boxStyle}>
        <TechnicalDetails disableNextPrev state={state} setState={setState} />
      </Box>
      <Box sx={boxStyle}>
        <JobLocation state={state} disableNextPrev setState={setState} />
      </Box>
      <Box sx={{ ...boxStyle, paddingBottom: "50px !important" }}>
        <DesiredSkills state={state} disableNextPrev setState={setState} />
      </Box>
      {assignJob ? (
        <Box sx={{ ...boxStyle, marginBottom: "40px" }}>
          <AssignJob state={state} setState={setState} />
        </Box>
      ) : null}

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
        <Button onClick={id ? handleUpdate : handleSave} variant={"blue-btn"}>
          {loading ? <Loader /> : id ? "Update Job" : "Post job"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Preview;
