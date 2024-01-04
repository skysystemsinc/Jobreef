import { Box, Radio } from "@chakra-ui/react";
import React from "react";

const RadioButton = ({ name,label ,value , handleEvent}) => {
  return (
    <Box>
      <Radio  disabled={value==""?true:false}  variant={"simple"} colorScheme="blue" value={value} borderColor={"blue.500"}>
        {label}
      </Radio>
    </Box>
  );
};

export default RadioButton;
