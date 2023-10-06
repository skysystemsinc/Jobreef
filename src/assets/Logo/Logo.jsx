import { Image, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import logo from "@/assets/Images/logo.svg"

const Logo = () => {
    const [isSmallerThe500] = useMediaQuery('(max-width: 500px)')

    return (
        <Image
            width={isSmallerThe500 ? "200px" : "250px"}
            src={logo.src}
            alt='logo'
        />

    )
}

export default Logo
