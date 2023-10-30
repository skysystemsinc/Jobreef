import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ExperianceForm from "./ExperianceForm";
import ExperianceCard from "../ExperianceCard/ExperianceCard";
import TextCard from "../TextCard/TextCard";
import EducationForm from "./EducationForm";
import EducationCard from "../EducationCard/EducationCard";
import CertificationForm from "./CertificationForm";
import CeritifcateCard from "../CeritifcateCard/CeritifcateCard";
import DeleteModal from "../DeleteModal/DeleteModal";

const Certification = () => {
  const [state, setState] = useState({
    addCertification: false,
    certificationData: [
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
    ],
    edit: false,
    delete: false,
  });
  return (
    <Box>
      <DeleteModal
        onOpen={() =>
          setState((prev) => {
            return { ...prev, delete: true };
          })
        }
        isOpen={state.delete}
        onClose={() =>
          setState((prev) => {
            return { ...prev, delete: false };
          })
        }
      />
      {state.addCertification || state.edit ? (
        <Box display={"flex"} justifyContent={"center"}>
          <CertificationForm
            state={state}
            saveHandle={() => {
              setState((prev) => {
                return {
                  ...prev,
                  addCertification: false,
                  edit: false,
                  certificationData: [1],
                };
              });
            }}
          />
        </Box>
      ) : state.certificationData.length > 0 ? (
        <Box
          minHeight={"63vh"}
          mt={"30px"}
          width={{ xl: "73%", base: "100%" }}
          mx={"auto"}
        >
          {state.certificationData.map((item) => {
            return (
              <Box>
                <CeritifcateCard data={item} state={state} setState={setState} />
              </Box>
            );
          })}

          <Flex justifyContent={"center"}>
            <Button
              onClick={() => {
                setState((prev) => {
                  return {
                    ...prev,
                    addCertification: true,
                    certificationData: [],
                  };
                });
              }}
              width="max-content"
              px={"12px"}
              mt={{ md: "61px", base: "20px" }}
              mb={"40px"}
              variant={"blue-btn"}
            >
              Add Certification
            </Button>
          </Flex>
        </Box>
      ) : (
        <Box minHeight={"68vh"} pl={{ md: "30px", base: "0px" }}>
          <TextCard
            addHandle={() =>
              setState((prev) => {
                return {
                  ...prev,
                  addCertification: true,
                  certificationData: [],
                };
              })
            }
            title={"Make Yourself Stand Out:"}
            subittle={"Add Your Industry Certifications and Licenses."}
            btnLable={"Add Certification"}
          />
        </Box>
      )}
    </Box>
  );
};

export default Certification;
