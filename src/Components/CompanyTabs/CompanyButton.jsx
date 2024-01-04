import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const CompanyButton = () => {
  const router = useRouter();
  const handleCreate = () => {
    router.push("/operator/create-company");
  };
  return (
    <Box
      width={"100%"}
      onClick={handleCreate}
      display={{ md: "none", base: "flex" }}
      justifyContent={"flex-end !important"}
      mb={"12px"}
    >
      <Button variant={"blue-btn"}>Create Company</Button>
    </Box>
  );
};

export default CompanyButton;
