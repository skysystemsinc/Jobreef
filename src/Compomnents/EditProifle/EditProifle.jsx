import { Avatar, AvatarBadge, FormLabel, Image, Input } from "@chakra-ui/react";
import React from "react";
import edit from "@/assets/Images/edit.svg";

const EditProifle = ({ profile , profileStyle }) => {
  return (
    <Avatar
      src={profile.src}
      width={{ md: "120px", base: "90px" }}
      height={{ md: "120px", base: "90px" }}
      sx={profileStyle}
    >
      <FormLabel>
        <AvatarBadge
          boxSize={{ md: "5em", base: "4em" }}
          border={"none"}
          bg="transparent"
        >
          <Image src={edit.src} width={{ md: "30px", base: "20px" }} />
        </AvatarBadge>
        <Input type="file" hidden />
      </FormLabel>
    </Avatar>
  );
};

export default EditProifle;
