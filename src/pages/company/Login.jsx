import React from 'react'
import leftblue_2 from "@/assets/Images/leftblue_2.png"
import { Box, Heading, Image } from '@chakra-ui/react'
import casrtoon from "@/assets/Images/cartooon.svg"
import SignIn from '@/Compomnents/SignIn/SignIn'

const Login = () => {
    return (
        <Box>

            <Image
                // width={isSmallerThe500 ? "200px" : "250px"}
                width={"710px"}
                src={leftblue_2.src}
                position={"absolute"}
                top={"0px"}
                left={"0px"}
                zIndex={-1}



                alt='Dan Abramov'
            />
            <Image
                // width={isSmallerThe500 ? "200px" : "250px"}
                width={"600px"}
                zIndex={2}

                position={"absolute"}
                bottom={"-70px"}
                left={"50px"}

                src={casrtoon.src}

                alt='Dan Abramov'
            />

            <SignIn />
        </Box>
    )
}

export default Login
