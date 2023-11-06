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
import woman from "../../../assets/Images/woman.png"
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
    Content: "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut et sit id nostrum! Dolor qui eaque nesciunt eveniet odio rerum iste maiores molestias fugiat, ratione, ullam hic illum laudantium id dolore? Doloremque obcaecati illo laborum ea error at placeat necessitatibus, rem earum numquam mollitia sunt quas id animi quae repellendus, aspernatur nisi, voluptates dolore aliquid perspiciatis officia aperiam. Pariatur voluptates voluptatibus quae possimus, deleniti ea optio suscipit, sit natus nisi officiis doloremque neque minus rerum deserunt quidem consequatur odit ducimus ex dolorum, quibusdam soluta inventore. Cumque, sed, qui aspernatur est dicta nesciunt et eum facere distinctio praesentium vel! Ratione, quisquam.", 
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
                <Box m={"10%"} mt={"5%"} display={"flex"} flexDirection="column" gap={3}
                transition= {"all 0.4s ease"}
                  // boxShadow= "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
                  transform= "scale(1.05)"
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
                    <Box>
                      <Image 
                        src={woman.src}
                      />
                    </Box>
                    <Heading variant={"p1"}>Image courtesy of Michael Burrows via Pexels</Heading>
                    <Heading variant={"p6"} fontWeight={"bold"}>“In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.”</Heading>
                    <Heading variant={"p1"}>— Olivia Rhye, Product Designer</Heading>

                    <Heading variant={"p4"} >Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                    </Heading>
                    <Heading variant={"p4"}>
                    Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                    Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</Heading>
                    <Heading variant={"p4"} >Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</Heading>        
                    <Heading variant={"p6"}>Software and Tools</Heading>
                    <Heading variant={"p4"} >Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                    </Heading>
                    <Heading variant={"p4"}>
                    Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </Heading>
                    <Heading variant={"p4"} >Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</Heading>        
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
