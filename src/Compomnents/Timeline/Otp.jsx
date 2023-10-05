import { Box, HStack, Heading, PinInput, PinInputField } from '@chakra-ui/react'
import React from 'react'

const Otp = () => {
  return (
    <Box>
      <Heading fontSize={"20px"} textAlign={"center"} mt={"60px"} variant={"p1"}>Please enter the 4 digit code send to example@email.com</Heading>
      <HStack display={"flex"} mt="60px" justifyContent={"center"}>
        <PinInput size={"lg"}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </Box>
  )
}

export default Otp
