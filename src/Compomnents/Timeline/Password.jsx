import { Box, Checkbox, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import PasswordInput from '../PasswordInput/PasswordInput'

const Password = () => {
    return (
        <Box>

            <Box marginBottom={{ sm: "40px", base: '40px' }}>
                <FormLabel marginBottom={{ sm: "19px", base: "10px" }} variant={"label"}>Enter Password</FormLabel>
                {/* <Input variant={"bg-input"} placeholder='Enter First Name' type='text' /> */}
                <PasswordInput variant={"bg-input"} />
            </Box>

            <Box marginBottom={{ sm: "40px", base: '40px' }}>
                <FormLabel marginBottom={{ sm: "19px", base: "10px" }} variant={"label"}>Confirm Password</FormLabel>
                {/* <Input variant={"bg-input"} placeholder='Enter Last Name' type='text' /> */}
                <PasswordInput variant={"bg-input"} />

            </Box>


        </Box>
    )
}

export default Password
