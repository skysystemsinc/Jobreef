// import { Box, Heading, Image } from "@chakra-ui/react";
// import React from "react";
// import waves from "@/assets/Images/waves.svg";
// import waves_2 from "@/assets/Images/wave_2.svg";
// import certified from "@/assets/Images/certified.svg";

// const CeritifcateCard = () => {
//   return (
//     <Box
//       borderRadius={"8px"}
//       position={"relative"}
//       width={{ md: "520px", base: "100%" }}
//       padding={"20px"}
//       overflow={"hidden"}
//       boxShadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
//     >
//       <Image
//         src={certified.src}
//         position={"absolute"}
//         top={"18px"}
//         right={"28px"}
//         zIndex={-1}
//         width={{ md: "132px" , base:"100px"}}
//         display={{sm:"block" , base:'none'}}
//       />
//       <Image
//         src={waves.src}
//         position={"absolute"}
//         bottom={"0px"}
//         left={"0px"}
//         width={"100%"}
//       />
//       <Image
//         src={waves_2.src}
//         // height={"100%"}
//         position={"absolute"}
//         bottom={"0px"}
//         right={"0px"}
//         width={"100%"}
//       />
//       <Heading
//         variant={"p1"}
//         lineHeight={"normal"}
//         color={"black.100"}
//         mb={"30px"}
//       >
//         07/31/23
//       </Heading>
//       <Box mb={"24px"}>
//         <Heading
//           variant={"p1"}
//           lineHeight={"normal"}
//           mb={"3px"}
//           color={"black.100"}
//         >
//           This Certificate has been awarded to
//         </Heading>
//         <Heading variant={"p4"} color={"black.100"} fontWeight={500}>
//           Charles Cartwright
//         </Heading>
//       </Box>
//       <Box mb={"24px"}>
//         <Heading
//           variant={"p1"}
//           mb={"3px"}
//           lineHeight={"normal"}
//           color={"black.100"}
//         >
//           Upon completion of course
//         </Heading>
//         <Heading variant={"p4"} color={"black.100"} fontWeight={500}>
//           Business Operations Management
//         </Heading>
//       </Box>
//       <Box mb={"24px"}>
//         <Heading
//           variant={"p1"}
//           mb={"3px"}
//           lineHeight={"normal"}
//           color={"black.100"}
//         >
//           By the issuing authority
//         </Heading>
//         <Heading variant={"p4"} color={"black.100"} fontWeight={500}>
//           Jobreef Professional Academy
//         </Heading>
//       </Box>

//       <Heading textAlign={"end"} variant={"p9"}>
//         Certificate Verification ID: 2f8ae5bfaa4c46dc3bba77655130f32a
//       </Heading>
//     </Box>
//   );
// };

// export default CeritifcateCard;
import { Box, Circle, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import edit_outline from "@/assets/Images/edit_outline.svg";
import trash from "@/assets/Images/trash.svg";
const CeritifcateCard = ({ headingStyle, dispableBlueCard }) => {
  const [isSmallerThe500] = useMediaQuery("(max-width: 500px)");

  return (
    <Box
      p={{ sm: "15px 15px 20px 15px ", base: "12px" }}
      mb={{ md: "33px", base: "20px" }}
      width={"100%"}
      borderRadius={"8px"}
      bg={"white.100"}
      border={"1px solid"}
      borderColor={"gray.light"}
      box-shadow="0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
    >
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        // borderBottom={"1px solid "}
        pr={"15px"}
        // borderColor={"gray.400"}
        flexWrap={{ xl: "nowrap", base: "wrap" }}
      >
        <Heading variant={"p7"} color={"gray.text"}>
          Diploma Name
        </Heading>

        <Box
          display={"flex"}
          alignItems={"center"}
          mt={{ xl: "0px", base: "10px" }}
          justifyContent={"flex-end"}
          width={{ xl: "auto", base: "100%" }}
          gap={"20px"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Image
              width={{ md: "17px", base: "16px" }}
              src={edit_outline.src}
            />
            <Heading variant={"p5"}>Edit</Heading>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"5px"}>
            <Image width={{ md: "17px", base: "16px" }} src={trash.src} />
            <Heading variant={"p5"}>Delete</Heading>
          </Box>
        </Box>
      </Box>
      <Box
        mt={{ md: "14px", base: "3px" }}
        display={"flex"}
        // alignItems={"flex-start"}
        alignItems={{ md: "flex-start", base: "center" }}
        flexWrap={{ md: "nowrap", base: "wrap" }}
        gap={{ md: "13px", sm: "6px", base: "5px" }}
      >
        <Heading color={"gray.text"} variant={"p12"} sx={headingStyle}>
          Walter Payton College Preparatory High School
        </Heading>
        <Box fontSize={{ sm: "14px", base: "8px" }}>
          <GoDotFill style={{ color: "#D9D9D9" }} />
        </Box>

        <Heading color={"gray.text"} variant={"p12"} sx={headingStyle}>
          September 2017 - July 2023
        </Heading>
        <Box fontSize={{ sm: "14px", base: "8px" }}>
          <GoDotFill style={{ color: "#D9D9D9" }} />
        </Box>

        <Heading
          display={"flex"}
          gap={"6px"}
          alignItems={{ md: "flex-start", base: "center" }}
          variant={"p12"}
          sx={headingStyle}
        >
          {" "}
          <HiLocationMarker
            style={{
              color: "#4A4A4A",
              fontSize: isSmallerThe500 ? "15px" : "20px",
            }}
          />{" "}
          Chicago, Illinois, USA
        </Heading>
        <Box fontSize={{ sm: "14px", base: "8px" }}>
          <GoDotFill style={{ color: "#D9D9D9" }} />
        </Box>
        <Heading sx={headingStyle} color={"gray.text"} variant={"p12"}>
          Certificate Verification ID: 2f8ae5bfaa4c46dc3bba77655130f32a
        </Heading>
      </Box>
      {/* <Box>
        <Heading
          lineHeight={"25px"}
          pt={"20px"}
          color={"gray.text"}
          variant={"p5"}
        >
          Lead the design and development of system architectures, ensuring they
          meet the project requirements, performance criteria, and scalability.
          Requirements Analysis: Collaborate with stakeholders, customers, and
          cross-functional teams to gather and analyze system requirements,
          ensuring clear and unambiguous specifications. Oversee the integration
          of hardware and software components into cohesive systems, addressing
          compatibility, functionality, and performance. Did Risk Assessment and
          Mitigation to Identify potential risks in the system design and
          develop ...
        </Heading>
      </Box> */}
    </Box>
  );
};

export default CeritifcateCard;
