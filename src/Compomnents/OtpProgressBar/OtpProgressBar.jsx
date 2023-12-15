import { Box, CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const OtpProgressBar = () => {
  const userState = useSelector((state) => state.userRegistration.value);
  const loginUser = useSelector((state) => state.LoginUser.value);

  console.log("userState",userState,loginUser);

  // const progressRef = useRef(100);
  const [progressValue, setProgressValue] = useState(100);
  const duration = 5 * 60 * 1000; // 5 minutes in milliseconds
  
  useEffect(() => {
    const startingTimestamp = new Date(userState?.otpTimestamp ?? loginUser.otpTimestamp).getTime();
    const intervalId = setInterval(() => {
      const elapsedTime = new Date() - startingTimestamp;
      const remainingTime = Math.max(0, duration - elapsedTime);
      const newProgress = Math.floor((remainingTime / duration) * 100);
      setProgressValue(newProgress);

      if (remainingTime === 0) {
        clearInterval(intervalId);
      }
    }, 1000); // Update every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [userState,loginUser]);

  return (
    <Box>
      <CircularProgress
        // value={52}
        value={progressValue}
        thickness={"13px"}
        size={{ md: "27px", base: "20px" }}
        color="blue.500"
      />
    </Box>
  );
};

export default OtpProgressBar;
