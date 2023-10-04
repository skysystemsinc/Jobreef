import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Button, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react'
import leftBlue from "@/assets/Images/leftBlue.png"
import rightYellow from "@/assets/Images/lightYellow.png"
import logo from "@/assets/Images/logo.svg"
import google from "@/assets/Images/google.svg"
import PasswordInput from '@/Compomnents/PasswordInput/PasswordInput'
import { Link } from '@chakra-ui/next-js'

export default function Home() {
  return (
    <>

      <Image
        width={"40%"}
        position={"absolute"}
        top={"0px"}
        right={"0px"}

        src={leftBlue.src}
        alt='Dan Abramov'
      />
      <Image
        width={"40%"}
        position={"fixed"}

        top={"100px"}
        bottom={"0px"}
        // zIndex={2}
        left={"0px"}

        src={rightYellow.src}
        alt='Dan Abramov'
      />
      <Box height={"100vh"} width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}

      >
        <Box width={"450px"} >
          <Image
            width={"250px"}
            src={logo.src}
            alt='Dan Abramov'
          />

          <Box>
            <FormLabel variant={"label"}>Email</FormLabel>
            <Input variant={"shadow-input"} placeholder='Enter Email' type='email' />
          </Box>
          <Box>
            <FormLabel variant={"label"}>Password</FormLabel>
            <PasswordInput />
          </Box>
          <Link variant={"blue-link"} href={"/"}>Forgot Password</Link>
          <Box>
            <Link variant={"blue-link"} color={"black.100 !important"} href={"/"}>Don’t have an account? <Text display={"inline"} color={"blue.500"} > Sign up</Text></Link>
          </Box>


          <Button className='nintoFont' variant={"blue-btn"}>Login</Button>
          {/* <Button className='nintoFont' variant={"blue-btn"}>Login</Button> */}
          <Image
            width={"250px"}
            src={google.src}
            alt='Dan Abramov'
          />

        </Box>

      </Box>
    </>
  )
}
