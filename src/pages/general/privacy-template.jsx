import Header from '@/Compomnents/Header/Header'
import React from 'react'
import {
    Box,
    Heading,
  } from "@chakra-ui/react";

const PrivacyTemplate = () => {
  return (
    <Box>
        <Header/>
        <Box  py={'4%'} px={'8%'} >
            <Box textAlign={"center"}>
                <Heading
                    variant={"p2"}
                    color={"gray.text"}
                >
                    Privacy Policy
                </Heading>
            </Box>
            <Box
                mt={"2%"}
                borderRadius= {'8px'}
                backgroundColor= {'#FFF'}
                boxShadow= {'0px 4px 20px 0px rgba(0, 0, 0, 0.10)'}
                p={'8%'}
            >
                <Box>
                    <Heading
                        variant={"p4"}
                        color={"gray.text"}
                        fontWeight={"bold"}
                    >
                        Last Updated: March 21st, 2023
                    </Heading>
                </Box>
                <Box mt={"2%"}>
                    <Heading
                        variant={"p4"}
                        color={"gray.text"}
                    >
                        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                    </Heading>
                </Box>
                <Box mt={"6%"}>
                    <Heading
                        fontWeight={"bold"}
                        variant={"p6"}
                        color={"gray.text"}
                        >
                        Collecting and Using Your Personal Data
                    </Heading>
                    
                    <Heading
                        fontWeight={"bold"}
                        mt={"2%"}
                        variant={"p4"}
                        color={"gray.text"}
                    >
                        Personal Data
                    </Heading>
                    <Heading
                        mt={"2%"}
                        variant={"p4"}
                        color={"gray.text"}
                    >
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </Heading>
                    <Heading
                        fontWeight={"bold"}
                        mt={"2%"}
                        variant={"p4"}
                        color={"gray.text"}
                    >
                        Usage Data
                    </Heading>
                    <Heading
                        mt={"2%"}
                        variant={"p4"}
                        color={"gray.text"}
                    >
                        Usage Data is collected automatically when using the Service.
                    </Heading>
                    <Heading
                        mt={"2%"}
                        variant={"p4"}
                        color={"gray.text"}
                    >
                        Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </Heading>
                </Box>
            </Box>
        </Box>
        <Box>
        </Box>
    </Box>

  )
}

export default PrivacyTemplate