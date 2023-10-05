import { Button, Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { HiOutlineEye } from "react-icons/hi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
function PasswordInput({variant}) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter your password'
                variant={variant}
            />
            <InputRightElement width='4.5rem'>
                {/* <Button h='1.75rem' size='sm' onClick={handleClick}> */}
                {/* {show ? 'Hide' : 'Show'} */}
                <Icon fontSize={"25px"} onClick={handleClick} marginTop={"20px"} cursor={"pointer"} color={"gray.100"} as={show ? HiOutlineEye : AiOutlineEyeInvisible} />
                {/* </Button> */}
            </InputRightElement>
        </InputGroup>
    )
}
export default PasswordInput