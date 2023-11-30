import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const JobPostButton = () => {
  const router = useRouter();
  const handleCreate = () => {
    router.push("/operator/create-job-post");
  };
  return (
    <Box
      width={"100%"}
      onClick={handleCreate}
      display={{ md: "none", base: "flex" }}
      justifyContent={"flex-end !important"}
      mb={"12px"}
    >
      <Button variant={"blue-btn"}>Create Job Post</Button>
    </Box>
  );
};

export default JobPostButton;
