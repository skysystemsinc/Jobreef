import { Box, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <Flex gap={"10px"} alignItems={"center"} width={"200px"}>
      <Box width={"max-content"}>
        <SkeletonCircle
          startColor="gray.100"
          endColor="gray.700"

          speed={0.9}
          size="10"
        />
      </Box>
      <Box width={"100%"}>
        <Skeleton 
        startColor="gray.100"
        endColor="gray.700"
        
        speed={0.9} height="7px" mb={"10px"} />
        <Skeleton
        startColor="gray.100"
        endColor="gray.700"
        
        speed={0.9} height="7px" />
      </Box>
    </Flex>
  );
};

export default LoadingSkeleton;
