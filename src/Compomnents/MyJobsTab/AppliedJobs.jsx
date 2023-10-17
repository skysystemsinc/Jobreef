import { Box, Circle, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import { GoDotFill } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";

import { MdOutlineStarOutline } from "react-icons/md";
import Star from "@/assets/Images/Star.svg";
import Popovers from "../MembersTable/Popovers";
import Chip from "../Chip/Chip";
import ComponentMyChip from "./ComponentMyChip";
const AppliedJobs = () => {
  const actionList = ["Download Attachments", "Archive"];

  return (
    <Box display={"flex"} gap={10} mt={10}>
    <Box
      p={{ sm: "20px", base: "12px" }}
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
        borderBottom={"1px solid "}
        flexWrap={{ xl: "nowrap", base: "wrap" }}
        borderColor={"gray.400"}
        pb={{ lg: "20px", base: "10px" }}
      >
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={{ md: "18px", base: "12px" }}
        >
          {/* <Box>
            <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} />
          </Box> */}
          <Box display={"flex"} mt={"0px"} alignItems={"center"} flexWrap={"wrap"}>
          <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} marginRight={2}/>
            <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
              Senior System's Designer Engineer
              <Box display={"flex"} alignItems={"center"}>
                <Heading
                // mt={{ md: "8px", base: "3px" }}
                variant={"p4"}
                color={"gray.text"}
                marginRight={1}
                >
                Microsoft       
                </Heading>
              <Box mr={"20px"} mt={"0px"}>
                    <ComponentMyChip label={"Urgently Hiring"} />
                </Box>
            </Box>
            </Heading>
            
          </Box>
        </Box>
      </Box>

      <Box>
        <Box display={"flex"} gap={"40px"} mt={"12px"} alignItems={"center"}>
          <Box>
            <Heading variant={"p10"}>Redmond, Washington State</Heading>
            <Box
              mt={"10px"}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Heading color={"gray.text"} variant={"p4"}>
                $150,000
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>
              <Heading color={"gray.text"} variant={"p4"}>
                Full Time
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>
              <Heading color={"gray.text"} variant={"p4"}>
                Experience: 3 years
              </Heading>
              <Heading marginLeft={14} marginLeftcolor={"gray.text"} variant={"p4"}>
                Applied On: 07/31/2023
              </Heading>
            </Box>
          </Box>
        </Box>
        <Box>
          <Heading mt={"22px"} variant={"p10"}>
            Relevant Skills
          </Heading>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} mt={"20px"} alignItems={"center"} flexWrap={"wrap"}>
            <Box mr={"20px"} mb={"10px"}>
                <ComponentMyChip  label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
          </Box>
          <Box>
            <Heading display="flex" mr={5} mt={"60px"} variant={"p10"}>
            Status: <span style={{color:'green'}}>New</span>
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
    











          
    <Box
      p={{ sm: "20px", base: "12px" }}
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
        borderBottom={"1px solid "}
        flexWrap={{ xl: "nowrap", base: "wrap" }}
        borderColor={"gray.400"}
        pb={{ lg: "20px", base: "10px" }}
      >
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={{ md: "18px", base: "12px" }}
        >
          {/* <Box>
            <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} />
          </Box> */}
          <Box display={"flex"} mt={"0px"} alignItems={"center"} flexWrap={"wrap"}>
          <Image width={{ md: "53px", base: "35px" }} src={microsoft.src} marginRight={2}/>
            <Heading variant={"p7"} fontWeight={700} color={"gray.text"}>
              Senior System's Designer Engineer
              <Box display={"flex"} alignItems={"center"}>
                <Heading
                // mt={{ md: "8px", base: "3px" }}
                variant={"p4"}
                color={"gray.text"}
                marginRight={1}
                >
                Microsoft       
                </Heading>
              <Box mr={"20px"} mt={"0px"}>
                    <ComponentMyChip label={"Urgently Hiring"} />
                </Box>
            </Box>
            </Heading>
            
          </Box>
        </Box>
      </Box>

      <Box>
        <Box display={"flex"} gap={"40px"} mt={"12px"} alignItems={"center"}>
          <Box>
            <Heading variant={"p10"}>Redmond, Washington State</Heading>
            <Box
              mt={"10px"}
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Heading color={"gray.text"} variant={"p4"}>
                $150,000
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>
              <Heading color={"gray.text"} variant={"p4"}>
                Full Time
              </Heading>
              <Box fontSize={{ sm: "14px", base: "8px" }}>
                <GoDotFill style={{ color: "#D9D9D9" }} />
              </Box>
              <Heading color={"gray.text"} variant={"p4"}>
                Experience: 3 years
              </Heading>
              <Heading marginLeft={14} marginLeftcolor={"gray.text"} variant={"p4"}>
                Applied On: 07/31/2023
              </Heading>
            </Box>
          </Box>
        </Box>
        <Box>
          <Heading mt={"22px"} variant={"p10"}>
            Relevant Skills
          </Heading>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} mt={"20px"} alignItems={"center"} flexWrap={"wrap"}>
            <Box mr={"20px"} mb={"10px"}>
                <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
            
            <Box mr={"20px"} mb={"10px"}>
            <ComponentMyChip label={"Technical knowledge"}/>
            </Box>
          </Box>
          <Box>
            <Heading display="flex" mr={5} mt={"60px"} variant={"p10"}>
            Status: <span style={{color:'green'}}>New</span>
            </Heading>
          </Box>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default AppliedJobs;