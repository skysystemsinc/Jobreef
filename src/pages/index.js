import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react'
import leftBlue from "@/assets/Images/leftBlue.png"
import rightYellow from "@/assets/Images/lightYellow.png"
import logo from "@/assets/Images/logo.svg"
import PasswordInput from '@/Compomnents/PasswordInput/PasswordInput'

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


      <Box >
        <Image
          width={"250px"}
          src={logo.src}
          alt='Dan Abramov'
        />

        <Box>
          <FormLabel variant={"label"}>Email</FormLabel>
          <Input variant={"shadow-input"}  placeholder='Enter Email' type='email' />
        </Box>
        <Box>
          <FormLabel variant={"label"}>Password</FormLabel>
          <PasswordInput/>
        </Box>
      </Box>


    </>
  )
}
