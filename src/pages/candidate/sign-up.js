import React from 'react'

import { Box, Heading, Image } from '@chakra-ui/react'

import SignIn from '@/Compomnents/SignIn/SignIn'

const Login = () => {
    return (
        <Box height={{ base: "100vh", }}>

            <SignIn candidate />
        </Box>
    )
}

export default Login
