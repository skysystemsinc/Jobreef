// import Image from 'next/image'
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  FormLabel,
  Flex,
  CloseButton
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import ComponentMyChip from "../../Components/ComponentMyChip/ComponentMyChip";
import { useState } from "react";
import microsoft from "@/assets/Images/microsoft.svg";
import upload from "@/assets/Images/upload.svg";



export default function Apply({object}) {


const [selectedFiles, setSelectedFiles] = useState([]);

// const handleFileChange = (event) => {
//   const files = Array.from(event.target.files);
//   setSelectedFiles([...selectedFiles, ...files]);
// };
const handleFileChange = (event) => {
  const files = Array.from(event.target.files);

  // Calculate the number of currently selected files and the maximum limit
  const currentFilesCount = selectedFiles.length;
  const maxLimit = 3;

  // Check if adding the selected files would exceed the maximum limit
  if (currentFilesCount + files.length <= maxLimit) {
    // If it's within the limit, add the selected files
    setSelectedFiles([...selectedFiles, ...files]);
  } else {
    // If it exceeds the limit, show an error or notification
    alert('Maximum limit of 3 files exceeded');
    // You can also prevent adding the files or implement other behavior as needed.
  }
};


const handleRemoveFile = (fileIndex) => {
  const updatedFiles = [...selectedFiles];
  updatedFiles.splice(fileIndex, 1);
  setSelectedFiles(updatedFiles);
};


  return (
    <>
      <Box  width={"100%"} textAlign={"center"}>
        <Box display={"flex"} justifyContent={"center"} mb={"25px"}>
            <Heading variant={"p8"} fontWeight={700} color={"black"}>Apply for this job</Heading>
        </Box>
        <Box
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              flexWrap={{ xl: "nowrap", base: "wrap" }}
              pb={{ lg: "20px", base: "10px" }}
            >
              <Box
                display={"flex"}
                alignItems={"flex-start"}
                gap={{ md: "18px", base: "12px" }}
                width={"100%"}
                justifyContent={"space-between"}
              >
                <Box
                  display={"flex"}
                  mt={"0px"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                >
                  <Image    
                    width={{ md: "53px", base: "35px" }}
                    src={microsoft.src}
                    marginRight={2}
                  />
                  <Heading
                    variant={"p7"}
                    fontWeight={700}
                    color={"gray.text"}
                  >
                    {object.title}
                    <Box display={"flex"} alignItems={"center"}>
                      <Heading
                        variant={"p4"}
                        color={"gray.text"}
                        marginRight={1}
                      >
                        {object.name}
                      </Heading>
                      <Box
                        ml={1}
                        mt={"4px"}
                        display="flex"
                        alignItems="center"
                      >
                        <ComponentMyChip label={object.tags} />
                      </Box>
                    </Box>
                  </Heading>
                </Box>
                
              </Box>
            </Box>
        <Box marginBottom={"10px"}>
          
        <Heading variant={"p11"} fontWeight={700} color={"gray.text"}
        style={{color: '#000',
            textalign: 'center',
            fontfamily: 'Open Sans',
            fontsize: '20px',
            fontstyle: 'normal',
            fontweight: '600',
            lineheight: 'normal',}}
        > Included Attachments:</Heading>
        </Box>
        <Flex direction="column" alignItems="center" gap={2}>
            {selectedFiles.map((file, index) => (
            <Box key={index} fontSize={15} display="flex" alignItems="center">
                <AttachmentIcon boxSize={4} mr={2} />
                {file.name}
                <CloseButton ml={0} mt={1} size="sm"  onClick={() => handleRemoveFile(index)} />
            </Box>
            ))}
        </Flex>
        <Box mt={6} mb={4}>
            <Heading variant={"p7"} fontWeight={700} color={"gray.text"}
            style={{color: '#000',
            textalign: 'center',
            fontfamily: 'Open Sans',
            fontsize: '16px',
            fontstyle: 'normal',
            fontweight: '600',
            lineheight: 'normal'}}>Attach Addtional Files</Heading>
        </Box>
        <Box
        mt={{ base: "20px", md: "0px" }}
        mb={{ base: "20px", md: "40px" }}
        display={"flex"}
        justifyContent={"center"}
        >
        <label htmlFor="fileInput">
            <FormLabel
            variant={"lightblue"}
            border={"1px dashed"}
            borderColor={"#BBBBC7"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ md: "10px", base: "8px" }}
            margin={0}
            >
            <Image src={upload.src} width={{ md: "17px", base: "15px" }} />
            Upload
            <Input
                type="file"
                id="fileInput"
                hidden
                multiple
                onChange={handleFileChange}
            />
            </FormLabel>
        </label>
        
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Button
            marginBottom={"15px"}
            className="nintoFont"
            variant={"blue-btn"}
            width={{ md: "162px", base: "140px" }}
          >
            Apply Now
          </Button>
          
        </Box>
        
      </Box>
    </>
  );
}



