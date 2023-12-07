import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Checkbox,
  FormLabel,
  Heading,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import profile from "@/assets/Images/profile.svg";
import edit from "@/assets/Images/edit.svg";
import InputWrapper from "../InputWrapper/InputWrapper";
import LabelInput from "../LabelInput/LabelInput";
import { useRouter } from "next/router";
import globalStyles from "@/styles/globalStyles";
import { education } from "@/schema/stateSchema";
import CheckBox from "../CheckBox/CheckBox";
import Loader from "../Loader/Loader";
import { post, put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { addEmployee } from "@/Reudx/slices/employee";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import { useDispatch, useSelector } from "react-redux";
const EducationForm = ({ state, setState }) => {
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch()
  const formDataState = useSelector(
    (state) => state.employeeRegister.value.formData
  );
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const [readOnly, setReadOnly] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(education);
  console.log("formData",formData)
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleCurrentlyChecked = (e) => {
    e.target.checked == true ? setReadOnly(true) : setReadOnly(false);
    setFormData((prev) => {
      return { ...prev, currentlyEnrolled: e.target.checked };
    });
  };

  const handleSave = async () => {
    //TODO add validation of date
    if (loading) return;
    const isValid = Object.values(formData).some((value) => value === "");

    if (isValid || formData.startDate == null) {
      toast({
        position: "bottom-right",
        title: " required fields are empty",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    setLoading(true);

    const body = {
      ...formData,
      employeeId: employeeState.id,
    };
    try {
      const postData = await post(`${endPoints.education}`, body);
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return { ...prev, add: false };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            education: [...employeeState.education, postData.data],
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
      console.log("err",err);
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
    //TODO add validation of date
    if (loading) return;
    const isValid = Object.values(formData).some((value) => value === "");
    console.log("isValid", isValid);
    if (isValid || formData.startDate == null) {
      toast({
        position: "bottom-right",
        title: " required fields are empty",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    setLoading(true);

    const body = {
      schoolName: formData.schoolName,
      diploma: formData.diploma,
      startDate: formData.startDate,
      endDate: formData.endDate,
      currentlyEnrolled: formData.currentlyEnrolled,
      gpa: formData.gpa,
      description: formData.description,

      location: {
        country: formData.country,
        province: formData.province,
        city: formData.city,
        address: formData.address,
      },
    };

    try {
      const postData = await put(`${endPoints.education}/${formData.id}`, body);
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return { ...prev, edit: false };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            education: employeeState.education.map((item) =>
              item.id === postData.data.id ? postData.data : item
            ),
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
      console.log("err",err);
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
      return { ...prev, add: false, edit: false };
    });
  };

  useSkipInitialEffect(() => {
    if (formDataState) {
      formDataState.currentlyEnrolled ? setReadOnly(true) : setReadOnly(false);
      setFormData({ ...formDataState, ...formDataState.location });
    }
  }, [formDataState]);
  return (
    <Box width={"100%"}>
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of your school"
            label={"School Name"}
            state={formData.schoolName}
            setState={handleChange}
            name={"schoolName"}
          />
          <LabelInput
            state={formData.diploma}
            setState={handleChange}
            name={"diploma"}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter your diploma"
            label={"Diploma"}
          />
        </InputWrapper>

        <Box border={"1px solid white"} mb={"30px"}>
          <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
            <LabelInput
              state={formData.startDate}
              setState={(e) => {
                setFormData((prev) => {
                  return { ...prev, startDate: e };
                });
              }}
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              label={"Starting Date"}
            />

            <Box width={"100%"} position={"relative"}>
              <Box>
                <LabelInput
                  state={formData.endDate}
                  setState={(e) => {
                    setFormData((prev) => {
                      return { ...prev, endDate: e };
                    });
                  }}
                  labelVariant={"label"}
                  type="date"
                  variant={"bg-input"}
                  placeholder="MM/DD/YYYY"
                  readOnly={readOnly}
                  label={"Ending Date"}
                />
              </Box>
              <Box
                display={"flex"}
                position={"absolute"}
                bottom={"-25px"}
                gap={"10px"}
                alignItems={"center"}
              >
                <CheckBox
                  label={"Currently Enrolled"}
                  selectSate={formData.currentlyEnrolled}
                  defaultCheck={formData.currentlyEnrolled}
                  handleEvent={handleCurrentlyChecked}
                />
              </Box>
            </Box>
          </InputWrapper>
        </Box>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            labelVariant={"label"}
            type="date"
            variant={"bg-input"}
            placeholder="Select the country of your job"
            dropdown
            label={"Country"}
            state={formData.country}
            setState={handleChange}
            name="country"
          />
          <LabelInput
            labelVariant={"label"}
            type="date"
            state={formData.province}
            setState={handleChange}
            name={"province"}
            dropdown
            variant={"bg-input"}
            placeholder="Select your state / province"
            label={"State / Province"}
          />
        </InputWrapper>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={formData.city}
            setState={handleChange}
            name={"city"}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="
            Enter City"
            label={"City"}
          />
          <LabelInput
            state={formData.address}
            name={"address"}
            setState={handleChange}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter Street Address "
            label={"Street Address"}
          />
        </InputWrapper>

        <Box maxWidth={{ xl: "48%", base: "100%" }}>
          <LabelInput
            labelVariant={"label"}
            state={formData.gpa}
            setState={handleChange}
            name={"gpa"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter your GPA"
            label={"GPA"}
          />
        </Box>

        <Box mb={{ md: "100px", base: "10px" }} mt={"20px"}>
          <LabelInput
            state={formData.description}
            setState={handleChange}
            name={"description"}
            labelVariant={"label"}
            type="text"
            textarea
            variant={"bg-teaxtarea"}
            placeholder="Describe what you did and studied during this period"
            label={"Description"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "40px", base: "10px" }}
          my={{ md: "56px", base: "20px" }}
          pb={"39px"}
        >
          <Button onClick={handleCancel} variant="outline-blue">
            Cancel
          </Button>

          <Button
            onClick={formData.id ? handleUpdate : handleSave}
            width={"max-content"}
            px={{ md: "30px", base: "20px" }}
            variant={"blue-btn"}
          >
            {loading ? (
              <Loader />
            ) : state.edit ? (
              "Update Education"
            ) : (
              "  Save Education"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EducationForm;
