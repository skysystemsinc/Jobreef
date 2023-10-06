import { Box } from "@chakra-ui/react";

const InputWrapper = ({children }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={{ md: "53px", base:"20px"}}
      width={"100%"}
      flexWrap={{md:"nowrap", base:"wrap"}}
      marginBottom={{ md: "40px", base: "26px" }} // Spread any additional props passed to the component
    >
        {children}
      {/* {input1}
      {input2} */}
    </Box>
  );
};

export default InputWrapper;
