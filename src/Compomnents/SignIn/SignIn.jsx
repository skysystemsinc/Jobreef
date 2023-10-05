import { Box, Heading, useMediaQuery, Image } from '@chakra-ui/react'
import React from 'react'
import { Timeline } from '../Timeline/Timeline'
import logo from "@/assets/Images/logo.svg"


const SignIn = () => {

    const [isSmallerThe500] = useMediaQuery('(max-width: 500px)')

    return (
        <Box padding={"75px 30px 0px 30px"} width={"100%"}

            display={"flex"}
            justifyContent={"center"}
        >


            <Box position={"absolute"} top={"65px"} left={"53px"} >
                <Heading variant={"h1"} mb={"55px"}>1. About You</Heading>
                <Heading variant={"h1"}>2. About Your Comapny</Heading>

            </Box>
            <Box width={"630px"} ml={"600px"}>
                <Box display={"flex"} justifyContent={"center"} mb={"52px"}>
                    <Image
                        width={isSmallerThe500 ? "200px" : "250px"}
                        src={logo.src}

                        alt='Dan Abramov'
                    />
                </Box>
                <Timeline />
            </Box>
        </Box>
    )
}

export default SignIn
