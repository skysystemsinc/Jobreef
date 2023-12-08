import { Box, Button, Heading, Image, useToast } from "@chakra-ui/react";
import LabelInput from "../LabelInput/LabelInput";
import edit_outline from "@/assets/Images/edit_outline.svg";
import { useRef, useState } from "react";
import { httpRequest } from "@/helper/httpRrequest";
import { BACKEND_URL } from "@/Utils/urls";
import endPoints from "@/Utils/endpoints";
import globalStyles from "@/styles/globalStyles";
import Loader from "../Loader/Loader";
const ChangePassword = () => {
  const toast = useToast();
  const [state, setState] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    isEdit: false,
    readOnly: true,
    loading: false,
  });
  const inputRef = useRef();

  const handleEdit = () => {
    setState((prev) => {
      return {
        ...prev,
        isEdit: true,
        readOnly: false,
      };
    });
  };
  const handleSave = async () => {
    if (state.newPassword !== state.confirmPassword) {
      toast({
        position: globalStyles.toastStyle.position,
        title: "password does not match",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
      return;
    }
    setState((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    if (state.loading) return;
    const id = localStorage.getItem("id");
    const body = {
      password: state.oldPassword,
      newPassword: state.newPassword,
      userId: id,
    };
    try {
      const postData = await httpRequest(
        `${BACKEND_URL}${endPoints.changePassword}`,
        "PUT",
        body
      );
      if (postData.success) {
        setState((prev) => {
          return {
            ...prev,
            loading: false,
            isEdit: false,
            readOnly:true,
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          };
        });
      } else {
        setState((prev) => {
          return {
            ...prev,
            loading: false,
          };
        });
      }
      toast({
        position: globalStyles.toastStyle.position,
        title: postData.message,
        status: postData.success ? "success" : "error",
        variant: "subtle",
        isClosable: true,
      });
    } catch (err) {
      toast({
        position: globalStyles.toastStyle.position,
        title: "Error!",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
  const handleCancel = () => {
    setState((prev) => {
      return {
        ...prev,
        isEdit: false,
        readOnly: true,
      };
    });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {state.isEdit ? (
        <Box width={{ md: "564px", base: "100%" }}>
          <Heading
            textAlign={"center"}
            m={{ md: "42px 0px 40px 0px", base: "30px 0px 30px 0px" }}
            variant={"p6"}
          >
            Change Password
          </Heading>
          <Box mb={{ base: "35px" }}>
            <LabelInput
              state={state.oldPassword}
              setState={handleChange}
              name={"oldPassword"}
              passwordInput
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Enter Current Password"
              label={" Current Password"}
            />
          </Box>
          <Box mb={{ base: "15px" }}>
            <LabelInput
              state={state.newPassword}
              setState={handleChange}
              name={"newPassword"}
              passwordInput
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Enter New Password"
              label={" New Password"}
            />
          </Box>
          <Box>
            <LabelInput
              state={state.confirmPassword}
              setState={handleChange}
              name={"confirmPassword"}
              passwordInput
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Re-enter your New Password"
              label={"Confirm Password"}
            />
          </Box>
        </Box>
      ) : (
        <Box
          minHeight={"58vh"}
          mt={{ md: "50px", base: "10px" }}
          width={{ md: "564px", base: "100%" }}
        >
          <LabelInput
            showEndLable
            readOnly={state.readOnly}
            handleEdit={handleEdit}
            labelVariant={"label"}
            type="text"
            inputRef={inputRef}
            variant={"shadow-input"}
            iconStyle={{ marginTop: "7px" }}
            placeholder="Enter Password"
            label={"Password"}
            passwordInput
            icon={
              <Image
                width={{ md: "17px", base: "15px" }}
                src={edit_outline.src}
              />
            }
          />
        </Box>
      )}

      {state.isEdit ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "20px", base: "10px" }}
          // my={{ md: "96px", base: "20px" }}
          mt={{ md: "80px", base: "60px" }}
        >
          <>
            <Button onClick={handleCancel} variant="outline-blue">
              Cancel
            </Button>
            <Button onClick={handleSave} variant={"blue-btn"}>
              {state.loading ? <Loader /> : "Save"}
            </Button>
          </>
        </Box>
      ) : null}
    </Box>
  );
};

export default ChangePassword;
