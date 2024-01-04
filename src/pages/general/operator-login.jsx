import React from 'react'
import General_login from "../../assets/Images/General_login.svg"
import Login from '@/Components/Login/Login';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Link,
} from "@chakra-ui/react";
    
const userLogin = () => {
  return (
    <Box height={"100vh"} display={"flex"} >
      <Box backgroundColor={"blue.500"} position="relative" flex={1} display={{lg:'block',base:'none'}} >
        <Box p={"20%"} px={'8%'} >
          <Image
            height="50vh"
            width="75vh"
            src={General_login.src}
          />
          <Heading
            variant="p6"
            textAlign="center"
            color="white.100"
            pr={50}
            fontWeight={700}
            fontSize={{ xl: "22px", lg: "20px", md: "18px", sm: "12px", base: "10px" }}
          >
            Find Opportunity Here.
          </Heading>
        </Box>
        
        
      </Box>
      <Box display="flex" flex={1} justifyContent="center" alignItems="center">
          <Box width={"70%"}>
            <Login disabledGoogleButton={true}/>
          </Box>
      </Box>

    </Box>

    
  )
}

export default userLogin    