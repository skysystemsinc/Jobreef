import { Box, Checkbox, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { useContext } from "react";
import LabelInput from "../LabelInput/LabelInput";
import { Role_context } from "@/context/context";

const PersonalInfo = ({ State, setState }) => {
  const { company, setCompany } = useContext(Role_context);
  const handleSelectCompany = (e) => {
    setCompany(e.target.checked);
    localStorage.setItem("company", e.target.checked);
  };

  return (
    <Box>
      <Box marginBottom={{ sm: "40px", base: "26px" }}>
        <LabelInput
          state={State.name}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter First Name"
          label={"First Name"}
        />
      </Box>

      <Box marginBottom={{ sm: "40px", base: "26px" }}>
        <LabelInput
          state={State.lastName}
          setState={(e) => {
            setState((prev) => {
              return { ...prev, lastName: e.target.value };
            });
          }}
          labelVariant={"label"}
          type="text"
          variant={"bg-input"}
          placeholder="Enter Last Name"
          label={"Last Name"}
        />
      </Box>

      <Box marginBottom={{ sm: "10px", base: "10px" }}>
        <LabelInput
          state={State.email}
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
      <Box display={"flex"} alignItems={"center"} gap={"10px"}>
        <Checkbox
          borderRadius={"10px"}
          onChange={handleSelectCompany}
          checked={company}
          size="md"
          defaultChecked
          colorScheme="blue"
          // border={"1px solid "}
          borderColor={company ? "blue.500" : "gray.text"}
          rounded={"sm"}
        />
        <Heading
          variant={"p1"}
          color={company ? "blue.500" : "gray.text"}
          margin={"0px"}
        >
          Register as Employer{" "}
        </Heading>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
