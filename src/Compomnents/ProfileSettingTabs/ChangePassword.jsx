import { Box, Button, Heading, Image } from "@chakra-ui/react";
import LabelInput from "../LabelInput/LabelInput";
import edit_outline from "@/assets/Images/edit_outline.svg";
import { useRef, useState } from "react";
const ChangePassword = () => {
  const [state, setstate] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  console.log("change password" , state)
  const inputRef = useRef();
  const [isEdit, setisEdit] = useState(false);

  const [readOnly, setreadOnly] = useState(true);
  const handleEdit = () => {
    setisEdit(true);
    setreadOnly(false);
  };
  const handleSave = () => {
    setisEdit(false);

    setreadOnly(true);
  };
  const handleCancel = () => {
    setisEdit(false);

    setreadOnly(true);
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      minH={"50vh"}
      flexDirection={"column"}
      alignItems={"center"}
      //   mt={{ md: "140px", base: "70px" }}
      mb={{ md: "50px", base: "30px" }}
    >
      {isEdit ? (
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
              setState={(e) => {
                setstate((prev) => {
                  return { ...prev, oldPassword: e.target.value };
                });
              }}
              passworInput
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Enter your Old Password"
              label={"Enter Current Password"}
            />
          </Box>
          <Box mb={{ base: "15px" }}>
            <LabelInput
              state={state.newPassword}
              setState={(e) => {
                setstate((prev) => {
                  return { ...prev, newPassword: e.target.value };
                });
              }}
              passworInput
              labelVariant={"label"}
              type="text"
              variant={"bg-input"}
              placeholder="Enter New Password"
              label={"Enter New Password"}
            />
          </Box>
          <Box>
            <LabelInput
              state={state.confirmPassword}
              setState={(e) => {
                setstate((prev) => {
                  return { ...prev, confirmPassword: e.target.value };
                });
              }}
              passworInput
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
          // mt={{ md: "0px", base: "40px" }}
          width={{ md: "564px", base: "100%" }}
        >
          <LabelInput
            showEndLable
            readOnly={readOnly}
            setreadOnly={setreadOnly}
            handleEdit={handleEdit}
            labelVariant={"label"}
            type="text"
            inputRef={inputRef}
            variant={"shadow-input"}
            iconStyle={{ marginTop: "7px" }}
            placeholder="***************"
            label={"Password"}
            passworInput
            icon={
              <Image
                width={{ md: "17px", base: "15px" }}
                src={edit_outline.src}
              />
            }
          />
        </Box>
      )}

      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={{ md: "20px", base: "10px" }}
        // my={{ md: "96px", base: "20px" }}
        mt={{ md: "80px", base: "60px" }}
      >
        {isEdit ? (
          <>
            <Button onClick={handleCancel} variant="outline-blue">
              Cancel
            </Button>
            <Button onClick={handleSave} variant={"blue-btn"}>
              Save
            </Button>
          </>
        ) : null}
      </Box>
    </Box>
  );
};

export default ChangePassword;
