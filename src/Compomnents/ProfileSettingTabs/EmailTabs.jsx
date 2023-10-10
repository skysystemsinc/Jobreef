import { Box, Image } from "@chakra-ui/react";
import LabelInput from "../LabelInput/LabelInput";
import edit_outline from "@/assets/Images/edit_outline.svg";
const EmailTabs = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      mt={{ md: "140px", base: "80px" }}
      mb={{ md: "120px", base: "0px" }}
      
    >
      <Box width={{ md: "564px", base: "100%" }}>
        <LabelInput
          showEndLable
          labelVariant={"label"}
          type="text"
          variant={"shadow-input"}
          placeholder="jacobjones9@gmail.com"
          label={"Email"}
          icon={<Image src={edit_outline.src} />}
        />
      </Box>
    </Box>
  );
};

export default EmailTabs;
