import { Box, Heading, Image } from "@chakra-ui/react";
import LabelInput from "../LabelInput/LabelInput";
import edit_outline from "@/assets/Images/edit_outline.svg";
const ChangePassword = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      //   mt={{ md: "140px", base: "70px" }}
      //   mb={{ md: "120px", base: "70px" }}
    >
      <Box width={{ md: "564px", base: "100%" }}>
        <Heading
          textAlign={"center"}
          m={{ md: "62px 0px 40px 0px", base: "30px 0px 30px 0px" }}
          variant={"p6"}
        >
          Change Password
        </Heading>
        <Box mb={{ base: "35px" }}>
          <LabelInput
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
            passworInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Enter New Password"
            label={"Enter New Password"}
          />
        </Box>
        <Box mb={{ md: "32px", base: "20px" }}>
          <LabelInput
            passworInput
            labelVariant={"label"}
            type="text"
            variant={"bg-input"}
            placeholder="Re-enter your New Password"
            label={"Confirm Password"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
