import React from "react";
import { GoDotFill } from "react-icons/go";
import { FiSearch, FiMapPin } from "react-icons/fi";
import ComponentMyChip from "../../Compomnents/ComponentMyChip/ComponentMyChip";
import microsoft from "@/assets/Images/microsoft.svg";
import Group from "@/assets/Images/Group.svg";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import EmptyVector from "../../assets/Images/EmptyVector.svg";
import cross from "../../assets/Images/cross.svg";
import NewJobSearchBox from "./NewJobSearchBox";
import ShowPreviousSearches from "./ShowPreviousSearches";
import { checkboxes,DataArray } from './tempSchema';
import {Box,Button,Flex,Heading,Input,InputGroup,InputLeftElement,Label,Image,Select,useBreakpointValue,} from "@chakra-ui/react";
import ShowClickJobSearchBox from "./ShowClickJobSearchBox";
import ShowEmptyResult from "./ShowEmptyResult";
import ShowCheckBoxes from "./ShowCheckBoxes";

const JobSearchResults = () => {
  
  const [selectedValues, setSelectedValues] = useState([]);
  const [companySearch, setCompany] = useState('temp need to be deleted whole useState');
  const [locationSearch, setLocation] = useState('temp need to be deleted whole useState');
  const [tempObject,setTempObject] = useState()
  //Temporary Button Later on need to be deleted
  const [toggle, settoggle] = useState("false");
  const [toggle2, settoggle2] = useState("false");

  var temp;
  var temp2;

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const deleteSelectedOptions = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    }
  };

  return (
    <Box>
      <Box display={"flex"} gap={10}>
        {toggle ? (
          <Button
            onClick={() => {
              toggle2 ? settoggle2(false) : settoggle2(true);
            }}
            style={{ padding: "20px 300px 20px 300px" }}
            variant="blue-btn"
            mt={5}
            ml={"300px"}
          >
            See the Display if there are no results Note This button will be remove in the final production
          </Button>
        ) : null}
      </Box>

      <Box display={"flex"} flexWrap={"wrap"} margin={10} gap={5}>
            <ShowCheckBoxes selectedValues={selectedValues} handleCheckboxChange={handleCheckboxChange}/>

        <Box flex={3} flexWrap={"wrap"}>
          <Box display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
            {selectedValues.map((val) => {
              return (
                <Box
                  display={"flex"}
                  mr={"20px"}
                  mb={"10px"}
                  key={Math.random()}
                  border="1px solid #2CA5C3"
                  borderRadius={"5px"}
                >
                  <ComponentMyChip label={val}>
                    <Image
                      width={{ md: "10px", base: "20px" }}
                      src={cross.src}
                      marginRight={2}
                      onClick={() => deleteSelectedOptions(val)}
                      style={{ margin: "1px 0px 0px 10px" }}
                    />
                  </ComponentMyChip>
                </Box>
              );
            })}
          </Box>
          {/* {toggle2 ? (
            <ShowEmptyResult/>
          ) : (
              DataArray.map((object,index) => {
                const render = (<NewJobSearchBox setTempObject={setTempObject} key={index} object={object} selectedValues={selectedValues} toggle={toggle} settoggle={settoggle}/>)
                if (render)
                {
                  console.log(render,"I am render",render.length,"I am length")
                  return <ShowEmptyResult/>
                }
                return render;
              })
            )
          } */}
          
             {/* {DataArray.map((object,index) => { */}
                <NewJobSearchBox setTempObject={setTempObject} key={index} selectedValues={selectedValues} toggle={toggle} settoggle={settoggle}/>
             {/* })} */}
            
              {
                // console.log(temp.length,"I am length",temp,"I am temp")
                // temp.length === 0 ? <ShowEmptyResult /> : null
              }
            
          
        </Box>
        {
            toggle ? (<ShowPreviousSearches/>) : (<ShowClickJobSearchBox toggle={toggle} settoggle={settoggle} object={tempObject}/>)
        } 
      </Box>
    </Box>
  );
};

export default JobSearchResults;
