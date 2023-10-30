import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";

import CertificationForm from "./CertificateForm";
import CeritifcateCard from "../CeritifcateCard/CeritifcateCard";

const Certification = ({ state, setState }) => {
  const style = {
    maxWidth: "240px",
  };
  const certificationData = [
    {
      certificateName: "Diploma Name",
      organizationName: "Jobreef Professional Academy",
      noExpiry: false,
      readOnly: false,
      certificateId: "2f8ae5bfaa4c46dc3bba77655",
      issuedOn: new Date(),
      country: " USA",
      state: "Chicago",
      city: " Illinois",
      validUntil: new Date(),
    },
    {
      certificateName: "Diploma Name",
      organizationName: "Jobreef Professional Academy",
      noExpiry: false,
      readOnly: false,
      certificateId: "2f8ae5bfaa4c46dc3bba77655",
      issuedOn: new Date(),
      country: " USA",
      state: "Chicago",
      city: " Illinois",
      validUntil: new Date(),
    },
  ];
  return (
    <Box>
      {state.addCertificate || state.edit ? (
        <Box display={"flex"} justifyContent={"center"}>
          <CertificationForm state={state} setState={setState} />
        </Box>
      ) : (
        <Box width={"100%"} mx={"auto"}>
          {certificationData.map((item) => {
            return (
              <Box>
                <CeritifcateCard
                  data={item}
                  state={state}
                  headingStyle={style}
                  setState={setState}
                />
              </Box>
            );
          })}

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                setState((prev) => {
                  return { ...prev, addCertificate: true };
                });
              }}
              width="max-content"
              px={"20px"}
              mt={{ md: "17px", base: "15px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add Certification
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Certification;
