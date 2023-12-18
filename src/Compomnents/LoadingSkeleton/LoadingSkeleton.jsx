import { Box, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <Flex gap={"10px"} alignItems={"center"} width={"200px"}>
      <Box width={"max-content"}>
        <SkeletonCircle
          startColor="blue.200"
          endColor="blue.400"
          speed={0.9}
          size="10"
        />
      </Box>
      <Box width={"100%"}>
        <Skeleton
          startColor="blue.200"
          endColor="blue.400"
          speed={0.9}
          height="10px"
          mb={"10px"}
        />
        <Skeleton
          startColor="blue.200"
          endColor="blue.400"
          speed={0.9}
          height="10px"
        />
      </Box>
    </Flex>
  );
};
const ExpCardLoading = () => {
  return (
    <Flex
      gap={"10px"}
      borderRadius={"10px"}
      mb={"10px"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box width={"100%"}>
        <Skeleton
          startColor="blue.200"
          endColor="blue.400"
          speed={0.9}
          height="100px"
        />
      </Box>
    </Flex>
  );
};
const DropdownLoading = () => {
  return (
    <Skeleton
      startColor="blue.200"
      endColor="blue.400"
      speed={1.5}
      width={"100%"}
      minW={"200px"}
      height="40px"
      borderRadius={"5px"}
    />
  );
};

export { ExpCardLoading, LoadingSkeleton, DropdownLoading };
