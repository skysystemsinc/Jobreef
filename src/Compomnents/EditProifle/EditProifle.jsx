import { Avatar, AvatarBadge, FormLabel, Image, Input } from "@chakra-ui/react";
import React from "react";
import edit from "@/assets/Images/edit.svg";
import profile_icon from "@/assets/Images/profile_icon.svg";
import profilePic from "@/assets/Images/profile.svg";
const EditProifle = ({ readOnly, handleEvent, profile, profileStyle }) => {
  return (
    <Avatar
      src={profilePic.src}
      // src={false}
      width={{ md: "120px", base: "90px" }}
      height={{ md: "120px", base: "90px" }}
      sx={profileStyle}
    >
      {readOnly ? null : (
        <FormLabel>
          <AvatarBadge
            boxSize={{ md: "5em", base: "4em" }}
            border={"none"}
            bg="transparent"
          >
            <Image src={edit.src} width={{ md: "30px", base: "20px" }} />
          </AvatarBadge>
          <Input
            disabled={readOnly}
            onChange={handleEvent}
            type="file"
            hidden
          />
        </FormLabel>
      )}
    </Avatar>
  );
};

export default EditProifle;
