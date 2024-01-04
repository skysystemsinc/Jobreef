import AddMemebersForm from "@/Compomnents/AddMemebersForm/AddMemebersForm";
import DashboardFooter from "@/Compomnents/Footer/DashboardFooter";
import CompanyDasboard from "@/Compomnents/Layout/DashboardLayout";
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

const AddTeamMembers = () => {
  return (
    <>
      <CompanyDasboard disableWaveImage>
        <Box display={"flex"} justifyContent={"center"}>
          <AddMemebersForm />
        </Box>
      <DashboardFooter waveImage/>
        
      </CompanyDasboard>
    </>
  );
};

export default AddTeamMembers;
