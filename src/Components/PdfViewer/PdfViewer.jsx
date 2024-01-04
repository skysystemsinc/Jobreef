import { AspectRatio } from "@chakra-ui/react";
import React from "react";

const PdfViewer = ({ pdfUrl }) => {
  return (
    // This video will have equal sides
    // <AspectRatio maxW="100%" >
      <iframe height={"500px"} width={"100%"} title="pdf" src={pdfUrl} allowFullScreen />
    // </AspectRatio>
  );
};

export default PdfViewer;
