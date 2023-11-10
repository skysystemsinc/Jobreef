// import { Box } from "@chakra-ui/react";

// const InputWrapper = ({ style, gap, children }) => {
//   return (
//     <Box
//     display={"flex"}
//     alignItems={"center"}
//     gap={gap ? gap : { md:"20px", base: "20px" }}
//     width={"100%"}
//       flexWrap={{ md: "nowrap", base: "wrap" }}
//       marginBottom={{ md: "25px", base: "15px" }} // Spread any additional props passed to the component
//       sx={style}
//     >
//       {children}
//     </Box>
//   );
// };

// export default InputWrapper;


// Convert this into grid if this works fine for your each sceanario then remove your code and use it

import { Grid } from "@chakra-ui/react";

const InputWrapper = ({ style, gap, children }) => {
  return (
    <Grid
      templateColumns={{ md: "repeat(2, 1fr)", base: "1fr" }}
      gap={gap ? gap : { md: "20px", base: "20px" }}
      width="100%"
      marginBottom={{ md: "25px", base: "15px" }}
      sx={style}
    >
      {children}
    </Grid>
  );
};

export default InputWrapper;
