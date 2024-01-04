import { Box, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <Flex gap={"10px"} alignItems={"center"} width={{ md: "200px", base:"max-content"}}>
      <Box width={"max-content"}>
        <SkeletonCircle
          startColor="blue.200"
          endColor="blue.400"
          speed={0.9}
          size="10"
        />
      </Box>
      <Box width={"100%"} display={{ md: "block", base: "none" }}>
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
const ProfileSkeleton = () => {
  return (
    <Flex
      gap={{ md: "30px", base: "20px" }}
      alignItems={"center"}
      maxW={"500px"}
      flexWrap={{ md: "nowrap", base: "wrap" }}
    >
      <Box width={"max-content"}>
        <SkeletonCircle
          startColor="blue.200"
          endColor="blue.400"
          speed={0.9}
          size="20"
        />
      </Box>
      <Box width={"100%"}>
        <Box>
          <Skeleton
            width={"200px"}
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="20px"
            mb={"20px"}
          />
        </Box>
        <Box
          display={"flex"}
          width={"100%"}
          gap={{ md: "20px", base: "10px" }}
          flexWrap={{ md: "nowrap", base: "wrap" }}
          justifyContent={"space-between"}
        >
          <Skeleton
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            width={"200px"}
            height="10px"
          />
          <Skeleton
            width={"200px"}
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="10px"
          />
        </Box>
      </Box>
    </Flex>
  );
};
const CandidateCardLoading = () => {
  return (
    <Box
      gap={"10px"}
      boxShadow={"0px 4px 20px 0px rgba(0, 0, 0, 0.15)"}
      borderRadius={"10px"}
      height={"200px"}
      width={"100%"}
      padding={"20px 16px"}
      bg={"white.100"}
    >
      <Box borderBottom={"1px solid "} borderColor={"gray.200"}>
        <Box maxW={"70%"} display={"flex"} gap={"60px"}>
          <Box>
            <Skeleton
              startColor="blue.200"
              endColor="blue.400"
              speed={0.9}
              height="16px"
              mb={"16px"}
              width={"50%"}
            />
            <Skeleton
              startColor="blue.200"
              endColor="blue.400"
              speed={0.9}
              height="16px"
              mb={"16px"}
              width={"200px"}
            />
          </Box>
          <Box>
            <Skeleton
              startColor="blue.200"
              endColor="blue.400"
              speed={0.9}
              height="16px"
              mb={"16px"}
              width={"50%"}
            />
            <Skeleton
              startColor="blue.200"
              endColor="blue.400"
              speed={0.9}
              height="16px"
              mb={"16px"}
              width={"200px"}
            />
          </Box>
          <Box>
            <Skeleton
              startColor="blue.200"
              endColor="blue.400"
              speed={0.9}
              height="16px"
              mb={"16px"}
              width={"50%"}
            />
            <Skeleton
              startColor="blue.200"
              endColor="blue.400"
              speed={0.9}
              height="16px"
              mb={"16px"}
              width={"200px"}
            />
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} mt={"20px"} gap={"60px"}>
        <Box width={"50%"} display={"flex"} flexWrap={"wrap"} gap={"10px"}>
          <Skeleton
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="22px"
            width={"120px"}
          />
          <Skeleton
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="22px"
            width={"120px"}
          />
          <Skeleton
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="22px"
            width={"120px"}
          />
          <Skeleton
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="22px"
            width={"120px"}
          />
          <Skeleton
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="22px"
            width={"120px"}
          />
          <Skeleton
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="22px"
            width={"120px"}
          />
          <Skeleton
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="22px"
            width={"120px"}
          />
        </Box>
        <Box>
          <Skeleton
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="20px"
            mb={"16px"}
            width={"320px"}
          />
          <Skeleton
            startColor="blue.200"
            endColor="blue.400"
            speed={0.9}
            height="20px"
            mb={"16px"}
            width={"320px"}
          />
        </Box>
      </Box>
    </Box>
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

export {
  ExpCardLoading,
  ProfileSkeleton,
  LoadingSkeleton,
  DropdownLoading,
  CandidateCardLoading,
};
