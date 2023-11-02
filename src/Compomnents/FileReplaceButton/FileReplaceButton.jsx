import { FormLabel, Image, Input } from "@chakra-ui/react";
import React from "react";

const FileReplaceButton = ({
  label,
  uploadIcon,
  handleEvent,
  btnLabelStyle,
}) => {
  return (
    <FormLabel
      variant={"lightGray"}
      border={"1px solid"}
      borderColor={"gray.900"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={{ md: "10px", base: "8px" }}
      sx={btnLabelStyle}
    >
      <Image src={uploadIcon.src} width={{ md: "17px", base: "12px" }} />{" "}
      {label}
      <Input  onChange={handleEvent} type="file" hidden />
    </FormLabel>
  );
};

export default FileReplaceButton;
