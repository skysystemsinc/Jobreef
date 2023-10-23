import React, { useState } from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { GoDotFill } from 'react-icons/go';
import { FaUpload } from 'react-icons/fa';
import Ellipse458 from '../../assets/Images/Ellipse458.svg'

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
        color={"blue.500"}
        fontSize={20}
        fontWeight={'normal'}
        borderRadius= {'8px'}
        border = {'1.5px solid #EBEBEB'}
        backgroundColor={'#FFF'}
      >
        Upload Resume File
      </Heading>

      <Box display={"flex"} alignItems={"center"} gap={2}>
        <GoDotFill style={{ color: "#2CA5C3", marginBottom: 10 }} />
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
        <GoDotFill style={{ color: "#2CA5C3", marginBottom: 10 }} />
        <Heading
          variant={"h1"}
          display={"flex"}
          alignItems={"center"}
          gap={"23px"}
          mb={{ "2xl": "30px", base: "16px" }}
          color={"blackAlpha.700"}
          fontSize={16}
        >
          This will be included in submitted job applications
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
            color={'#BBBBC7'}
            backgroundColor={"#F4F9FF"}
            padding={"10px 30px 10px 30px"}
          >
            <FaUpload style={{ marginRight: '8px', color: '#BBBBC7' }} />
            {selectedFile ? 'File Selected' : 'Upload'}
          </Box>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          accept=".pdf, .doc, .docx"
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
        color={"blue.500"}
        fontSize={20}
        fontWeight={'normal'}
        borderRadius= {'8px'}
        border = {'1.5px solid #EBEBEB'}
        backgroundColor={'#FFF'}
      >
        Upload Additional Files (e.g. Cover Letter or ID)
      </Heading>

      <Box display={"flex"} alignItems={"center"} gap={2}>
        <GoDotFill style={{ color: "#2CA5C3", marginBottom: 10 }} />
        <Heading
          variant={"h1"}
          display={"flex"}
          alignItems={"center"}
          gap={"23px"}
          mb={{ "2xl": "30px", base: "16px" }}
          color={"blackAlpha.700"}
          fontSize={16}
        >
          The acceptable file formats are PDF, Word, PNG, and JPEG files
        </Heading>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={2}>
        <GoDotFill style={{ color: "#2CA5C3", marginBottom: 10 }} />
        <Heading
          variant={"h1"}
          display={"flex"}
          alignItems={"center"}
          gap={"23px"}
          mb={{ "2xl": "30px", base: "16px" }}
          color={"blackAlpha.700"}
          fontSize={16}
        >
          This will be included in submitted job applications
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
            color={'#BBBBC7'}
            backgroundColor={"#F4F9FF"}
            padding={"10px 30px 10px 30px"}
          >
            <FaUpload style={{ marginRight: '8px', color: '#BBBBC7' }} />
            {selectedFile ? 'File Selected' : 'Upload'}
          </Box>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
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