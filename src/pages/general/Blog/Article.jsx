import Header from "@/Compomnents/Header/Header";
import React from "react";
import { Box, Heading, Image,Input,
  InputGroup,
  InputLeftElement, } from "@chakra-ui/react";
import Generalblog from "../../../assets/Images/Generalblog.svg"
import Avatar from "../../../assets/Images/Avatar.png"
import arrowupright from "../../../assets/Images/arrow-up-right.svg"
import ComponentMyChip from "@/Compomnents/ComponentMyChip/ComponentMyChip";
import { FiSearch, FiMapPin } from "react-icons/fi";

const categories = [
  {key: 'Information' , value : 2},
  {key: 'Design' , value : 2},
  {key: 'Software Engineering' , value : 2},
  {key: 'Hardware Engineering' , value : 1},
  {key: 'IT' , value : 0},
  {key: 'Product' , value : 2},
  {key: 'Skills' , value : 0},
]
const blog = [
  {
    BlogPicture: "../../../assets/Images/Generalblog.svg",
    Name: "Design",
    Title: "UX review Presentation",
    Content: "How do you create compelling presentations that wow your colleagues and impress your managers? ",
    DisplayPicture: "../../../assets/Images/Avatar.png",
    UserName: "Olivia Rhye",
    Date: "20 Jan 2022",
  },
];

const Article = () => {
  return (
    <Box>
      <Header />
      <Box m={"4%"}>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Heading color={"blue.500"} fontWeight={"bold"} variant={"p4"}>
            20 Jan 2022 10 min read
          </Heading>
          <Heading color={"gray.text"} fontWeight={"bold"} variant={"p6"}>
            Building your API Stack
          </Heading>
          <Heading color={"gray.text"} variant={"p4"}>
            The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
          </Heading>
          <Box mt={"2%"} display={"flex"} gap={"1%"}>
              <Image
                src={Avatar.src}
              />
              <Box display={"flex"} flexDirection={"Column"}>
                <Heading
                  color={"gray.text"}
                  fontWeight={"bold"}
                  variant={"p4"}
                >
                  Olivia Rhye
                </Heading>
                <Heading
                  color={"gray.text"}
                  variant={"p4"}
                >
                  Engineering Manager, Layers
                </Heading>
              </Box>
            </Box>          
          </Box>
        <Box mt={"2%"} gap={10} display={"flex"}>
          <Box flex={3} display={"flex"} flexWrap={"wrap"} gap={"2%"}>
            {blog.map((object) => {
              return (
                <Box m={"10%"} mt={"5%"} width={"30%"} display={"flex"} flexDirection="column" gap={3}
                transition= {"all 0.4s ease"}
                _hover={{
                  cursor: "pointer",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
                  transition: "all 0.4s ease",
                  transform: "scale(1.05)",
                }}
                >
                    <Box>
                      <Heading
                        color={"gray.text"}
                        fontWeight={"bold"}
                        variant={"p6"}
                      >
                        Introduction
                      </Heading>
                    </Box>
                    <Heading
                      color={"gray.text"}
                      variant={"p4"}
                    >
                      {object.Content}
                    </Heading>
                    <Box display={"flex"} gap={"2%"}>
                      <Image
                        src={Avatar.src}
                      />
                    </Box>
                    <Heading
                      color={"gray.text"}
                      variant={"p4"}
                    >
                      {object.Content}
                    </Heading>
                </Box>
              );
            })}
          </Box>
          <Box flex={1}>
            <Box width={"90%"}>
              <Box >      
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FiSearch color="black" />}
                  />
                  <Input
                    color={"black"}
                    type="text"
                    variant="bg-input"
                    placeholder="Search"
                    _placeholder={{ color: "rgba(0, 0, 0, 0.6)" }}
                    bg={"gray.200"}
                    
                  />
                </InputGroup>
              </Box>
              <Box 
                my={"10%"}
                borderRadius= {'8px'}
                border= {'0.5px solid #797979)'}
                backgroundColor = {'#FEFEFE'}
                padding={'4%'}
                boxShadow= {"0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"}
              >
                <Heading
                  color={"gray.text"}
                  variant={"p6"}
                >
                  Category
                </Heading>
                <Box>
                  {categories.map((object)=>{
                        return(
                          <Box display={"flex"} gap={2} my={"2%"}>
                            <Heading
                              color={"gray.text"}
                              variant={"p4"}
                            >
                              {object.key}
                            </Heading>
                            <Heading
                              color={"gray.text"}
                              variant={"p4"}
                            >
                              {object.value === 0 ? null : `(${object.value})`}
                            </Heading>
                          </Box>
                        )
                    })}
                  </Box>     
              </Box>
                  <Box>
                      <Heading
                        color={"gray.text"}
                        variant={"p6"}
                        fontWeight={"bold"}
                        mb={2}
                      >
                        Key words
                      </Heading>
                      <Box display={"flex"} gap={2} flexWrap={"wrap"}>
                        <ComponentMyChip label={"Ideas"} textcolor={"#2CA5C3"}/>
                        <ComponentMyChip label={"Development"} textcolor={"#2CA5C3"}/>
                        <ComponentMyChip label={"Branding"} textcolor={"#2CA5C3"}/>
                        <ComponentMyChip label={"Design"} textcolor={"#2CA5C3"}/>
                        <ComponentMyChip label={"Logos"} textcolor={"#2CA5C3"}/>
                      </Box>
                  </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Article;
