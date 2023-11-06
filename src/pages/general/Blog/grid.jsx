import Header from "@/Compomnents/Header/Header";
import React from "react";
import { Box} from "@chakra-ui/react";
import Desktopgrid from "./grid/desktopgrid";
import Mobilegrid from "./grid/mobilegrid";

const grid = () => {
  return (
    <Box>
      <Header/>
      <Box display={{lg:'block',md:'none',sm:'none',base:'none'}}>
          <Desktopgrid/>
      </Box>
      <Box display={{lg:'none',md:'block'}}>
          <Mobilegrid/>
      </Box>
    </Box>
  );
};

export default grid;
