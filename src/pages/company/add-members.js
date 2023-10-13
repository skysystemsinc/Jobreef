import AddMemebersForm from "@/Compomnents/AddMemebersForm/AddMemebersForm";
import CompanyDasboard from "@/Compomnents/Layout/DasboardLayout";
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

const AddTeamMembers = () => {
  return (
    <>
      <CompanyDasboard>
        <AddMemebersForm />
      </CompanyDasboard>
    </>
  );
};

export default AddTeamMembers;
