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
import UploadBox from "../UploadBox/UploadBox";
import globalStyles from "@/styles/globalStyles";
import { certification } from "@/schema/stateSchema";
import CheckBox from "../CheckBox/CheckBox";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";
import { useDispatch, useSelector } from "react-redux";
import { post, put } from "@/helper/fetch";
import endPoints from "@/Utils/endpoints";
import { addEmployee } from "@/Reudx/slices/employee";
import Loader from "../Loader/Loader";
const CertificationForm = ({ state, setState }) => {
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();
  const formDataState = useSelector(
    (state) => state.employeeRegister.value.formData
  );
  const employeeState = useSelector(
    (state) => state.employeeRegister.value.employee
  );
  const [formData, setFormData] = useState(certification);
  console.log("formData", formData);
  const [loading, setLoading] = useState(false);

  const [readOnly, setReadOnly] = useState(false);

  const uploadList = [
    "Please upload in minimum 1000x1000 resolution, if in image format",
    "The acceptable formats of the copy are .PDF, .JPEG or .PNG",
    "Uploading of digital copy is not mandatory",
  ];

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
      return { ...prev, noExpiry: e.target.checked };
    });
  };

  const handleSave = async () => {
    //TODO add validation of date
    if (loading) return;
    const isValid = Object.values(formData).some((value) => value === "");

    if (isValid || formData.issuedOn === null) {
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
      const postData = await post(`${endPoints.certification}`, body);
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return { ...prev, add: false };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            certification: [...employeeState.certification, postData.data],
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
   
    if (loading) return;
    const isValid = Object.values(formData).some((value) => value === "");
  
    if (isValid || formData.issuedOn === null) {
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
      certificateName: formData.certificateName,
      organizationName: formData.organizationName,
      certificateId: formData.certificateId,
      issuedOn: formData.issuedOn,
      noExpiry: formData.noExpiry,
      validUntil: formData.validUntil,
      certificateMedia: formData.certificateMedia,
    };

    try {
      const postData = await put(
        `${endPoints.certification}/${formData.id}`,
        body
      );
      if (postData.success) {
        setLoading(false);
        setState((prev) => {
          return { ...prev, edit: false };
        });

        dispatch(
          addEmployee({
            ...employeeState,
            certification: employeeState.certification.map((item) =>
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
  const handleCancel = () => {
    setState((prev) => {
      return { ...prev, add: false, edit: false };
    });
  };



  const handleUpload = (event, key, index) => {
    //  = Array.from(event.target.files);
    const selectedFile = Array.from(event.target.files).map((file, index) => {
      return {
        name: file.name,
        url: "",
      };
      // console.log("file.name", file);
      // if (file) {
      //   const reader = new FileReader();
      //   reader.onload = (e) => {
      //     mediaArray.push({ name: file.name, url: e.target.result });
      //   };
      //   reader.readAsDataURL(file);
      // }
    });

    setFormData((prev) => {
      return {
        ...prev,
        certificateMedia: [...formData.certificateMedia, ...selectedFile],
        // certificateMedia: mediaArray,
      };
    });
  };
  const handleMediaDelete = (ind) => {
    const updatedArray = [...formData.certificateMedia];
    console.log("updatedArray", updatedArray);
    updatedArray.splice(ind, 1);
    setFormData((prev) => {
      return {
        ...prev,
        certificateMedia: updatedArray,
      };
    });
  };
  useSkipInitialEffect(() => {
    if (formDataState) {
      formDataState.noExpiry ? setReadOnly(true) : setReadOnly(false);
      setFormData({ ...formDataState });
    }
  }, [formDataState]);
  return (
    <Box width={"100%"}>
      {/* <Image src={profile.src} /> */}

      <Box mt={"0px"}>
        <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
          <LabelInput
            state={formData.certificateName}
            setState={handleChange}
            name={"certificateName"}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of your certificate"
            label={"Name of Certificate"}
          />
          <LabelInput
            state={formData.organizationName}
            setState={handleChange}
            name={"organizationName"}
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter the name of issuing organization"
            label={"Issuing Organization"}
          />
        </InputWrapper>

        <Box border={"1px solid white"}>
          <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
            <LabelInput
              state={formData.certificateId}
              setState={handleChange}
              name={"certificateId"}
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Enter the certificate ID"
              label={"Certificate ID"}
            />

            <LabelInput
              state={formData.issuedOn}
              setState={(e) => {
                setFormData((prev) => {
                  return { ...prev, issuedOn: e };
                });
              }}
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              label={"Issued On"}
            />
          </InputWrapper>
        </Box>

        <Box width={{ xl: "48%", base: "100%" }} position={"relative"}>
          <Box>
            <LabelInput
              state={formData.validUntil}
              setState={(e) => {
                setFormData((prev) => {
                  return { ...prev, validUntil: e };
                });
              }}
              labelVariant={"label"}
              type="date"
              variant={"bg-input"}
              placeholder="MM/DD/YYYY"
              readOnly={readOnly}
              label={"Valid Until"}
            />
          </Box>
          <Box
            display={"flex"}
            position={"absolute"}
            bottom={"-40px"}
            gap={"10px"}
            alignItems={"center"}
          >
            <CheckBox
              label={"This formData has no expiry"}
              selectSate={formData.noExpiry}
              defaultCheck={formData.noExpiry}
              handleEvent={handleCurrentlyChecked}
            />
          </Box>
        </Box>

        <Box mt={{ md: "95px", base: "80px" }}>
          <UploadBox
            handleEvent={handleUpload}
            btnLabelStyle={{ padding: "0px 10px" }}
            butLabel={"Upload"}
            handleDelete={handleMediaDelete}
            list={uploadList}
            showSelectedImage={formData.certificateMedia}
            // showSelectedImage={"data"}

            titie={"Upload Certificate in Digital Format"}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "40px", base: "10px" }}
          mb={{ md: "30px", base: "20px" }}
          mt={{ md: "73px", base: "50px" }}
          pb={"39px"}
        >
          <Button onClick={handleCancel} variant="outline-blue">
            Cancel
          </Button>

          <Button
            onClick={formData.id ? handleUpdate : handleSave}
            // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
            width={"max-content"}
            px={{ md: "30px", base: "20px" }}
            variant={"blue-btn"}
          >
            {loading ? (
              <Loader />
            ) : state.edit ? (
              "Update Certification"
            ) : (
              " Save Certification"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CertificationForm;
