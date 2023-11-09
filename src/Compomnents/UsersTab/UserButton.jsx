import { Box, Button } from "@chakra-ui/react";
import React from "react";

const UserButton = () => {
  return (
    <Box
      width={"100%"}
      display={{ md: "none", base: "flex" }}
      justifyContent={"flex-end !important"}
      mb={"12px"}
      // onClick={()=>router.push("/company/create-job-post")}
    >
      <Button variant={"blue-btn"}>Create User</Button>
    </Box>
  );
};

export default UserButton;
