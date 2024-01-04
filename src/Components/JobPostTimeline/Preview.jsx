import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react";
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
import { addJob, getAllJobs, setAllJobs } from "@/Redux/slices/jobPost";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { job } from "@/schema/stateSchema";
import ScreeningQuestion from "./ScreeningQuestion";
import { status } from "@/Utils/constant";

const Preview = ({ assignJob, isEdit, state, setState }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [draftLoading, setDraftLoading] = useState(false);
  const jobState = useSelector((state) => state.jobPost.value);
  const allJobState = useSelector((state) => state.jobPost.jobs.allJobs);
  console.log("allJobState", allJobState);
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
    const q1 = jobState?.screeningQuestions[0];
    if (q1.question == "" || q1.type == "") {
      toast({
        position: "bottom-right",
        title: "Add at least one question.",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
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
          address: jobState.address,
        },
        tags: tags,
        companyId: companyState.id,
      };
      const postData = await post(`${endPoints.jobs}`, body);
      console.log("postData", postData);

      if (postData) {
        if (allJobState.length) {
          dispatch(setAllJobs([...allJobState, postData.data]));
        } else {
          dispatch(setAllJobs([postData.data]));
        }
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
  const handleDraft = async () => {
    setDraftLoading(true);
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
          address: jobState.address,
        },
        active: false,
        status: status.draft,
        draft: true,
        tags: tags,
        companyId: companyState.id,
      };
      const postData = await post(`${endPoints.jobs}`, body);
      console.log("postData", postData);
      setDraftLoading(false);
      if (postData) {
        if (allJobState.length) {
        } else {
          dispatch(setAllJobs([postData.data]));
        }
        dispatch(addJob(job));
        router.push("/company/job-post");
      }
    } catch (err) {
      console.log("err", err);
      setDraftLoading(false);
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
        ScreeningQuestions: jobState.ScreeningQuestions,
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
      <Box sx={{ ...boxStyle, paddingBottom: "40px !important" }}>
        <DesiredSkills state={state} disableNextPrev setState={setState} />
      </Box>
      <Box sx={{ ...boxStyle, paddingBottom: "50px !important" }}>
        <ScreeningQuestion state={state} disableNextPrev setState={setState} />
      </Box>
      {assignJob ? (
        <Box sx={{ ...boxStyle, marginBottom: "40px" }}>
          <AssignJob state={state} setState={setState} />
        </Box>
      ) : null}

      {id ? null : (
        <Button onClick={handleDraft} variant={"blue-btn"}>
          {draftLoading ? <Loader /> : "Save as Draft"}
        </Button>
      )}
      <Flex
        width="100%"
        justify="center"
        mt={{ md: "15px", base: "0px" }}
        mb={"20px"}
        gap={4}
      >
        <Button onClick={handleCancel} variant="outline-blue">
          {"Cancel"}
        </Button>
        <Button onClick={id ? handleUpdate : handleSave} variant={"blue-btn"}>
          {loading ? <Loader /> : id ? "Update Job" : "Post job"}
        </Button>
      </Flex>

      <Heading
        color={"gray.text"}
        mx={"auto"}
        maxW={"500px"}
        textAlign={"center"}
        variant={"p4"}
        mb={"40px"}
      >
        By selecting Post job you agree to abide by all Terms and Conditions and
        to pay the fees of incurred by this job listing.
      </Heading>
    </Box>
  );
};

export default Preview;
