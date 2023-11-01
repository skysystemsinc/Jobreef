import { Box, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import LabelInput from "@/Compomnents/LabelInput/LabelInput";


const PersonalInfo = ({ State, setState }) => {
  
//
  return (
    <Box>
      
        <Heading
          textAlign={"center"}
          variant={"p8"}
          color={"gray.text"}
          margin={"0px"}
        >
          Forget Password
        </Heading>
        <Box mt={8}>
          <Heading
            as={"p"}
            fontSize={{ "2xl": "30px", base: "16px", sm: "17px" }}
            textAlign={"center"}
            m={{
              "2xl": "60px 0px 76px -62px",
              md: "30px 0px 62px 0px",
              base: "30px 0px 46px 0px",
            }}
            whiteSpace={{ lg: "nowrap", base: "wrap" }}
            variant={"p2"}
          >
            Please enter the email address associated with your Jobreef account
          </Heading>
        </Box>
      <Box mt={10} px={10}>
        
        <LabelInput
          state={State?.email}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter  Email"
          label={"Email"}
        />
      </Box>
    </Box>
  );
};

export default PersonalInfo;
