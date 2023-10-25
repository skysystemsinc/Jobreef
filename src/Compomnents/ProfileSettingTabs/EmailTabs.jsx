import { Box, Button, Heading, Image } from "@chakra-ui/react";
import LabelInput from "../LabelInput/LabelInput";
import edit_outline from "@/assets/Images/edit_outline.svg";
import { useRef, useState } from "react";
import white_edit from "@/assets/Images/white-edit.svg";
import Otp from "../SignUpTimeline/Otp";
import axios from "axios";
import { useSelector } from "react-redux";
import useSkipInitialEffect from "@/hooks/useSkipInitailEffect";

const EmailTabs = () => {
  const userProfile = useSelector((state) => state.userProfileSlice.value);

  const [email, setemail] = useState("");
  const inputRef = useRef();
  const [isEdit, setisEdit] = useState(false);
  const [otp, setotp] = useState(false);
  const [readOnly, setreadOnly] = useState(true);
  const handleEdit = () => {
    setisEdit(true);
    setreadOnly(false);
  };
  const handleSave = async () => {
    const response = await axios("/api/company/userProfile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: { email },
    });

    console.log(response);
    setisEdit(false);
    setotp(true);
    setreadOnly(true);
  };
  const handleCancel = () => {
    setisEdit(false);
    setotp(false);
    setreadOnly(true);
  };
  useSkipInitialEffect(() => {
    setemail(userProfile.email);
  }, [userProfile]);
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      // mt={{ md: "60px", base: "40px" }}
      // pb={{ md: "20px", base: "0px" }}
    >
      {isEdit ? (
        <Heading
          textAlign={"center"}
          // mb={{ md: "0px", base: "30px" }}
          mt={{ md: "40px", base: "20px" }}
          variant={"p6"}
        >
          Change Email
        </Heading>
      ) : null}

      {otp ? (
        <Box mt={{ md: "20px", base: "0px" }}>
          <Otp  text={"Please enter the 4 digit code sent to your email"}/>
        </Box>
      ) : (
        <Box
          minHeight={isEdit || otp ? "27vh" : "44vh"}
          mt={{ md: "50px", base: "40px" }}
          // pb={"190px"}
          // border={"1px solid red"}
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
            placeholder="jacobjones9@gmail.com"
            label={"Email"}
            state={email}
            setState={(e) => setemail(e.target.value)}
            icon={
              <Image
                width={{ md: "17px", base: "15px" }}
                src={edit_outline.src}
              />
            }
          />
        </Box>
      )}

      {isEdit || otp ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ md: "20px", base: "10px" }}
          // my={{ md: "96px", base: "20px" }}
          mt={otp ? "60px" : ""}
        >
          <>
            <Button onClick={handleCancel} variant="outline-blue">
              Cancel
            </Button>
            <Button onClick={handleSave} variant={"blue-btn"}>
              {otp ? "Verify" : "Save"}
            </Button>
          </>
        </Box>
      ) : null}
    </Box>
  );
};

export default EmailTabs;
