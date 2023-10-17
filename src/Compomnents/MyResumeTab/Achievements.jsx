import React, { useState } from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { GoDotFill } from 'react-icons/go';
import { FaUpload } from 'react-icons/fa';

const Achievements = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Box display={"flex"} flexWrap={"wrap"}>
    <Box flex={1} margin={10} padding={10} border="1px solid gray" borderRadius={10} >
      <Heading
        variant={"h1"}
        alignItems={"center"}
        alignSelf={"center"}
        textAlign={"center"}
        gap={"23px"}
        mb={{ "2xl": "30px", base: "16px" }}
        color={"blue.300"}
        fontSize={24}
      >
        Upload Resume File
      </Heading>

      <Box display={"flex"} alignItems={"center"} gap={2}>
        <GoDotFill style={{ color: "blue", marginBottom: 10 }} />
        <Heading
          variant={"h1"}
          display={"flex"}
          alignItems={"center"}
          gap={"23px"}
          mb={{ "2xl": "30px", base: "16px" }}
          color={"blackAlpha.700"}
          fontSize={16}
        >
          The Acceptable File Formats are PDF and Word Files
        </Heading>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={2}>
        <GoDotFill style={{ color: "blue", marginBottom: 10 }} />
        <Heading
          variant={"h1"}
          display={"flex"}
          alignItems={"center"}
          gap={"23px"}
          mb={{ "2xl": "30px", base: "16px" }}
          color={"blackAlpha.700"}
          fontSize={16}
        >
          The Acceptable File Formats are PDF and Word Files
        </Heading>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
        <label htmlFor="fileInput">
          <Box
            as="span"
            variant="bg-input"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            borderRadius="5px"
            color={"black"}
            backgroundColor={"blue.200"}
            padding={"10px 30px 10px 30px"}
          >
            <FaUpload style={{ marginRight: '8px' }} />
            {selectedFile ? 'File Selected' : 'Upload'}
          </Box>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Box>

      {selectedFile && (
        <Box mt={4}>
          <strong>Selected File:</strong> {selectedFile.name}
        </Box>
      )}
    </Box>









    <Box flex={1} margin={10} padding={10} border="1px solid gray" borderRadius={10} >
      <Heading
        variant={"h1"}
        alignItems={"center"}
        alignSelf={"center"}
        textAlign={"center"}
        gap={"23px"}
        mb={{ "2xl": "30px", base: "16px" }}
        color={"blue.300"}
        fontSize={24}
      >
        Upload Resume File
      </Heading>

      <Box display={"flex"} alignItems={"center"} gap={2}>
        <GoDotFill style={{ color: "blue", marginBottom: 10 }} />
        <Heading
          variant={"h1"}
          display={"flex"}
          alignItems={"center"}
          gap={"23px"}
          mb={{ "2xl": "30px", base: "16px" }}
          color={"blackAlpha.700"}
          fontSize={16}
        >
          The Acceptable File Formats are PDF and Word Files
        </Heading>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={2}>
        <GoDotFill style={{ color: "blue", marginBottom: 10 }} />
        <Heading
          variant={"h1"}
          display={"flex"}
          alignItems={"center"}
          gap={"23px"}
          mb={{ "2xl": "30px", base: "16px" }}
          color={"blackAlpha.700"}
          fontSize={16}
        >
          The Acceptable File Formats are PDF and Word Files
        </Heading>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
        <label htmlFor="fileInput">
          <Box
            as="span"
            variant="bg-input"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            borderRadius="5px"
            color={"black"}
            backgroundColor={"blue.200"}
            padding={"10px 30px 10px 30px"}
          >
            <FaUpload style={{ marginRight: '8px' }} />
            {selectedFile ? 'File Selected' : 'Upload'}
          </Box>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Box>

      {selectedFile && (
        <Box mt={4}>
          <strong>Selected File:</strong> {selectedFile.name}
        </Box>
      )}
    </Box>    
    


    </Box>
  );
};

export default Achievements;




// import React from 'react'
// import { Flex, Box } from '@chakra-ui/react';

// const Achievements = () => {
//     return (
//         <Flex>
//           {/* Box 1 */}
//           <p>Upload Resume File</p>
//           <Box p={4} borderWidth="1px" borderRadius="md" mr={4}>
//             {/* Your File Upload Logic for Box 1 */}
//             <input type="file" />
//             {/* Additional content or styling for Box 1 */}
//           </Box>
    
//           {/* Box 2 */}
//           <p>Upload Addtional Files (e.g Cover Letter or ID)</p>
//           <Box p={4} borderWidth="1px" borderRadius="md">
//             {/* Your File Upload Logic for Box 2 */}
//             <input type="file" />
//             {/* Additional content or styling for Box 2 */}
//           </Box>
//         </Flex>
//       );
// }

// export default Achievements



// import {
//     Avatar,
//     AvatarBadge,
//     Box,
//     Button,
//     FormLabel,
//     Image,
//     Input,
//   } from "@chakra-ui/react";
//   import React from "react";
//   import profile from "@/assets/Images/profile.svg";
//   import edit from "@/assets/Images/edit.svg";
//   import InputWrapper from "../InputWrapper/InputWrapper";
//   import LabelInput from "../LabelInput/LabelInput";
//   import { useRouter } from "next/router";
//   const Overview = ({setTabIndex , tabIndex}) => {
//     const router = useRouter()
//     return (
//       <Box mt={{ md: "50px", lg: "60px", base: "20px" }} width={{md:"70%", sm:"100%"}}  >
//         {/* <Image src={profile.src} /> */}
  
//         <Box mt={"0px"}>
//           <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
//             <LabelInput
//               labelVariant={"label"}
//               type="text"
//               variant={"bg-input"}
//               dropdown
//               placeholder="Select your home country"
//               label={"Country"}
//             />
//             <LabelInput
//               labelVariant={"label"}
//               type="text"
//               variant={"bg-input"}
//               placeholder="Select your state / province"
//               label={"State / Province"}
//               dropdown
//             />
//           </InputWrapper>
  
//           <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}>
//             <LabelInput
//               labelVariant={"label"}
//               type="text"
//               variant={"bg-input"}
//               placeholder="Select your city"
//               dropdown
//               label={"City"}
//             />
//                 <LabelInput
//                 labelVariant={"label"}
//                 type="file"
//                 variant={"bg-input"}
//                 placeholder="Enter your phone number"
//                 label={"Phone Number"}
//                 />
//           </InputWrapper>
//           {/* <InputWrapper gap={{ xl: "40px", "2xl": "76px", base: "20px" }}> */}
//           <LabelInput
//             labelVariant={"label"}
//             type="text"
//             variant={"bg-teaxtarea"}
//             placeholder="Describe yourself for your emoployers"
//             textarea
//             label={"Summary"}
//           />
//           {/* </InputWrapper> */}
  
//           <Box
//             display={"flex"}
//             justifyContent={"center"}
//             gap={{ md: "40px", base: "10px" }}
//             my={{ md: "56px", base: "20px" }}
//             pb={"39px"}
//           >
//             <Button
//               onClick={() => {
//                 // tabIndex == 0 ? null : setTabIndex(--tabIndex);
//                 router.push("/")
//               }}
//               // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
//               variant="outline-blue"
//             >
//               Cancel
//             </Button>
  
//             <Button
//               onClick={() => {
//                 // tabIndex == 2 ? null : setTabIndex(++tabIndex);
//                 router.push("/")
  
//               }}
//               // width={{ md: "160px", lg: "200px", sm: "140px", base: "120px" }}
//               variant={"blue-btn"}
//             >
//               Save
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     );
//   };
  
//   export default Overview;
  


