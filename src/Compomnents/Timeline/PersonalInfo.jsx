import { Box, Checkbox, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const PersonalInfo = () => {
    return (
        <Box>

            <Box marginBottom={{ sm: "40px", base: '40px' }}>
                <FormLabel marginBottom={{ sm: "19px", base: "10px" }} variant={"label"}>First Name</FormLabel>
                <Input variant={"bg-input"} placeholder='Enter First Name' type='text' />
            </Box>

            <Box marginBottom={{ sm: "40px", base: '40px' }}>
                <FormLabel marginBottom={{ sm: "19px", base: "10px" }} variant={"label"}>Last Name</FormLabel>
                <Input variant={"bg-input"} placeholder='Enter Last Name' type='text' />
            </Box>

            <Box marginBottom={{ sm: "20px", base: '40px' }}>
                <FormLabel marginBottom={{ sm: "19px", base: "10px" }} variant={"label"}>Email</FormLabel>
                <Input variant={"bg-input"} placeholder='Enter Last Email' type='email' />
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Checkbox borderRadius={"10px"} defaultChecked size='md' colorScheme='blue' />
                <Heading variant={"p1"} color={"blue.500"} margin={"0px"} >Register as Employer </ Heading>

            </Box>
        </Box>
    )
}

export default PersonalInfo
