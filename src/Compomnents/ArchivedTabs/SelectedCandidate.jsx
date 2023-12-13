import React,{useState} from "react";
import SelectedCandidateCard from "../SelectedCandidateCard/SelectedCandidateCard";
import { Box } from "@chakra-ui/react";
import NotePad from "../NotePad/NotePad";
import { useSelector } from "react-redux";

const SelectedCandidate = ({ profileBtn,  matchCandidate }) => {
  const selectedCandidates = useSelector(
    (state) => state.candidates.value.selected
  );

  const [toggle,setToggle] = useState(false);

  return (
    <Box display={"flex"} gap="20px">
      <Box width={"100%"}>
        <SelectedCandidateCard  profileBtn={profileBtn} matchCandidate={matchCandidate} toggle={toggle} setToggle={setToggle} />
      </Box>
      { toggle ? (matchCandidate ? null
       :
       <Box
          width={{ "2xl": "700px", base: "520px" }}
          display={{ lg: "block", base: "none" }}
        >
          <NotePad />
        </Box>)
       : null}
    </Box>
  );
};

export default SelectedCandidate;


{/* <Button mb={{ md: "25px", base: "15px" }} variant={"blue-btn"} onClick={()=>{isOpen ? setIsOpen(false) : setIsOpen(true)}}>
          {isOpen ? 'Exit NotePad' : 'Open Notepad'}
        </Button> */}