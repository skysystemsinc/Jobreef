import Header from "@/Components/Header/Header";
import React from "react";
import {
  Box,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  OrderedList,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Generalblog from "../../../../assets/Images/Generalblog.svg";
import Avatar from "../../../../assets/Images/Avatar.png";
import arrowupright from "../../../../assets/Images/arrow-up-right.svg";
import ComponentMyChip from "@/Components/ComponentMyChip/ComponentMyChip";
import { FiSearch, FiMapPin } from "react-icons/fi";
import woman from "../../../../assets/Images/woman.png";
const categories = [
  { key: "Information", value: 2 },
  { key: "Design", value: 2 },
  { key: "Software Engineering", value: 2 },
  { key: "Hardware Engineering", value: 1 },
  { key: "IT", value: 0 },
  { key: "Product", value: 2 },
  { key: "Skills", value: 0 },
];
const blog = [
  {
    BlogPicture: "../../../assets/Images/Generalblog.svg",
    Name: "Design",
    Title: "UX review Presentation",
    Content:
      "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut et sit id nostrum! Dolor qui eaque nesciunt eveniet odio rerum iste maiores molestias fugiat, ratione, ullam hic illum laudantium id dolore? Doloremque obcaecati illo laborum ea error at placeat necessitatibus, rem earum numquam mollitia sunt quas id animi quae repellendus, aspernatur nisi, voluptates dolore aliquid perspiciatis officia aperiam. Pariatur voluptates voluptatibus quae possimus, deleniti ea optio suscipit, sit natus nisi officiis doloremque neque minus rerum deserunt quidem consequatur odit ducimus ex dolorum, quibusdam soluta inventore. Cumque, sed, qui aspernatur est dicta nesciunt et eum facere distinctio praesentium vel! Ratione, quisquam.",
    DisplayPicture: "../../../assets/Images/Avatar.png",
    UserName: "Olivia Rhye",
    Date: "20 Jan 2022",
  },
];

const blog2 = [
  {
    BlogPicture: "../../../assets/Images/Generalblog.svg",
    Name: "Design",
    Title: "UX review Presentation",
    Content:
      "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut et sit id nostrum! Dolor qui eaque nesciunt eveniet odio rerum iste maiores molestias fugiat, ratione, ullam hic illum laudantium id dolore? Doloremque obcaecati illo laborum ea error at placeat necessitatibus, rem earum numquam mollitia sunt quas id animi quae repellendus, aspernatur nisi, voluptates dolore aliquid perspiciatis officia aperiam. Pariatur voluptates voluptatibus quae possimus, deleniti ea optio suscipit, sit natus nisi officiis doloremque neque minus rerum deserunt quidem consequatur odit ducimus ex dolorum, quibusdam soluta inventore. Cumque, sed, qui aspernatur est dicta nesciunt et eum facere distinctio praesentium vel! Ratione, quisquam.",
    DisplayPicture: "../../../assets/Images/Avatar.png",
    UserName: "Olivia Rhye",
    Date: "20 Jan 2022",
  },
  {
    BlogPicture: "../../../assets/Images/Generalblog.svg",
    Name: "Design",
    Title: "UX review Presentation",
    Content:
      "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut et sit id nostrum! Dolor qui eaque nesciunt eveniet odio rerum iste maiores molestias fugiat, ratione, ullam hic illum laudantium id dolore? Doloremque obcaecati illo laborum ea error at placeat necessitatibus, rem earum numquam mollitia sunt quas id animi quae repellendus, aspernatur nisi, voluptates dolore aliquid perspiciatis officia aperiam. Pariatur voluptates voluptatibus quae possimus, deleniti ea optio suscipit, sit natus nisi officiis doloremque neque minus rerum deserunt quidem consequatur odit ducimus ex dolorum, quibusdam soluta inventore. Cumque, sed, qui aspernatur est dicta nesciunt et eum facere distinctio praesentium vel! Ratione, quisquam.",
    DisplayPicture: "../../../assets/Images/Avatar.png",
    UserName: "Olivia Rhye",
    Date: "20 Jan 2022",
  },
  {
    BlogPicture: "../../../assets/Images/Generalblog.svg",
    Name: "Design",
    Title: "UX review Presentation",
    Content:
      "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut et sit id nostrum! Dolor qui eaque nesciunt eveniet odio rerum iste maiores molestias fugiat, ratione, ullam hic illum laudantium id dolore? Doloremque obcaecati illo laborum ea error at placeat necessitatibus, rem earum numquam mollitia sunt quas id animi quae repellendus, aspernatur nisi, voluptates dolore aliquid perspiciatis officia aperiam. Pariatur voluptates voluptatibus quae possimus, deleniti ea optio suscipit, sit natus nisi officiis doloremque neque minus rerum deserunt quidem consequatur odit ducimus ex dolorum, quibusdam soluta inventore. Cumque, sed, qui aspernatur est dicta nesciunt et eum facere distinctio praesentium vel! Ratione, quisquam.",
    DisplayPicture: "../../../assets/Images/Avatar.png",
    UserName: "Olivia Rhye",
    Date: "20 Jan 2022",
  },
];

const ArticleMobile = () => {
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
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </Heading>
          <Box mt={"2%"} display={"flex"} gap={"1%"}>
            <Image src={Avatar.src} />
            <Box display={"flex"} flexDirection={"Column"}>
              <Heading color={"gray.text"} fontWeight={"bold"} variant={"p4"}>
                Olivia Rhye
              </Heading>
              <Heading color={"gray.text"} variant={"p4"}>
                Engineering Manager, Layers
              </Heading>
            </Box>
          </Box>
        </Box>
        <Box mt={"6%"} gap={10} display={"flex"}>
        <Box display={'none'} >
            <Box width={"90%"}>
              <Box>
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
                my={"10px"}
                borderRadius={"8px"}
                border={"0.5px solid #797979)"}
                backgroundColor={"#FEFEFE"}
                padding={"4%"}
                boxShadow={
                  "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
                }
              >
                <Heading color={"gray.text"} variant={"p6"}>
                  Category
                </Heading>
                <Box display={"flex"} flexWrap={"wrap"} my={'10px'}>
                  {categories.map((object) => {
                    return (
                      <Box display={"flex"} mx={'10px'} gap={'2px'} my={"2px"}>
                        <Heading color={"gray.text"} variant={"p4"}>
                          {object.key}
                        </Heading>
                        <Heading color={"gray.text"} variant={"p4"}>
                          {object.value === 0 ? null : `(${object.value})`}
                        </Heading>
                      </Box>
                    );
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
                  <ComponentMyChip label={"Ideas"} textcolor={"#2CA5C3"} />
                  <ComponentMyChip
                    label={"Development"}
                    textcolor={"#2CA5C3"}
                  />
                  <ComponentMyChip label={"Branding"} textcolor={"#2CA5C3"} />
                  <ComponentMyChip label={"Design"} textcolor={"#2CA5C3"} />
                  <ComponentMyChip label={"Logos"} textcolor={"#2CA5C3"} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
          <Box display={"flex"} flexWrap={"wrap"} gap={"2%"}>
            {blog.map((object) => {
              return (
                <Box
                //   m={"10%"}
                  mt={"5%"}
                  display={"flex"}
                  flexDirection="column"
                  gap={3}
                  transition={"all 0.4s ease"}
                  transform="scale(1.00)"
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
                  <Heading color={"gray.text"} variant={"p4"}>
                    {object.Content}
                  </Heading>
                  <Box>
                    <Image src={woman.src} />
                  </Box>
                  <Heading variant={"p1"} color={"gray.text"}>
                    Image courtesy of Michael Burrows via Pexels
                  </Heading>
                  <Heading
                    variant={"p6"}
                    fontWeight={"bold"}
                    color={"gray.text"}
                  >
                    “In a world older and more complete than ours they move
                    finished and complete, gifted with extensions of the senses
                    we have lost or never attained, living by voices we shall
                    never hear.”
                  </Heading>
                  <Heading variant={"p1"} color={"gray.text"}>
                    — Olivia Rhye, Product Designer
                  </Heading>

                  <Heading variant={"p4"} color={"gray.text"}>
                    Dolor enim eu tortor urna sed duis nulla. Aliquam
                    vestibulum, nulla odio nisl vitae. In aliquet pellentesque
                    aenean hac vestibulum turpis mi bibendum diam. Tempor
                    integer aliquam in vitae malesuada fringilla.
                  </Heading>
                  <Heading variant={"p4"} color={"gray.text"}>
                    Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                    imperdiet commodo consectetur convallis risus. Sed
                    condimentum enim dignissim adipiscing faucibus consequat,
                    urna. Viverra purus et erat auctor aliquam. Risus, volutpat
                    vulputate posuere purus sit congue convallis aliquet. Arcu
                    id augue ut feugiat donec porttitor neque. Mauris, neque
                    ultricies eu vestibulum, bibendum quam lorem id. Dolor
                    lacus, eget nunc lectus in tellus, pharetra, porttitor.
                    Ipsum sit mattis nulla quam nulla. Gravida id gravida ac
                    enim mauris id. Non pellentesque congue eget consectetur
                    turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
                    tincidunt aenean tempus. Quis velit eget ut tortor tellus.
                    Sed vel, congue felis elit erat nam nibh orci.
                  </Heading>
                  <Heading variant={"p4"} color={"gray.text"}>
                    Ipsum sit mattis nulla quam nulla. Gravida id gravida ac
                    enim mauris id. Non pellentesque congue eget consectetur
                    turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
                    tincidunt aenean tempus. Quis velit eget ut tortor tellus.
                    Sed vel, congue felis elit erat nam nibh orci.
                  </Heading>
                  <Heading
                    variant={"p6"}
                    color={"gray.text"}
                    fontWeight={"bold"}
                  >
                    Software and Tools
                  </Heading>
                  <Heading
                    variant={"p4"}
                    color={"gray.text"}
                  >
                    Mi tincidunt elit, id quisque ligula ac diam, amet. Vel
                    etiam suspendisse morbi eleifend faucibus eget vestibulum
                    felis. Dictum quis montes, sit sit. Tellus aliquam enim
                    urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi,
                    tellus tincidunt. At feugiat sapien varius id.
                  </Heading>
                  <Heading variant={"p4"} color={"gray.text"}>
                    Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                    volutpat mollis at volutpat lectus velit, sed auctor.
                    Porttitor fames arcu quis fusce augue enim. Quis at habitant
                    diam at. Suscipit tristique risus, at donec. In turpis vel
                    et quam imperdiet. Ipsum molestie aliquet sodales id est ac
                    volutpat.{" "}
                  </Heading>
                  <Heading color={"gray.text"} variant={"p4"}>
                    Ipsum sit mattis nulla quam nulla. Gravida id gravida ac
                    enim mauris id. Non pellentesque congue eget consectetur
                    turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
                    tincidunt aenean tempus. Quis velit eget ut tortor tellus.
                    Sed vel, congue felis elit erat nam nibh orci.
                  </Heading>
                  <Heading
                    color={"gray.text"}
                    variant={"p6"}
                    fontWeight={"bold"}
                  >
                    Other Resources
                  </Heading>
                  <Heading color={"gray.text"} variant={"p4"}>
                    Sagittis et eu at elementum, quis in. Proin praesent
                    volutpat egestas sociis sit lorem nunc nunc sit. Eget diam
                    curabitur mi ac. Auctor rutrum lacus malesuada massa ornare
                    et. Vulputate consectetur ac ultrices at diam dui eget
                    fringilla tincidunt. Arcu sit dignissim massa erat cursus
                    vulputate gravida id. Sed quis auctor vulputate hac
                    elementum gravida cursus dis.
                  </Heading>
                  <OrderedList>
                    <ListItem>
                      <Heading color={"gray.text"} variant={"p4"}>
                        Lectus id duis vitae porttitor enim gravida morbi.
                      </Heading>
                    </ListItem>
                    <ListItem>
                      <Heading color={"gray.text"} variant={"p4"}>
                        Eu turpis posuere semper feugiat volutpat elit, ultrices
                        suspendisse. Auctor vel in vitae placerat.
                      </Heading>
                    </ListItem>
                    <ListItem>
                      <Heading color={"gray.text"} variant={"p4"}>
                        Suspendisse maecenas ac donec scelerisque diam sed est
                        duis purus.
                      </Heading>
                    </ListItem>
                  </OrderedList>

                  <Heading variant={"p4"}></Heading>

                  <Heading color={"gray.text"} variant={"p4"}>
                    {object.Content}
                  </Heading>
                </Box>
              );
            })}
          </Box>
          
        <Box my={"4%"} >
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Heading color={"blue.500"} fontWeight={"bold"} variant={"p4"}>
              Our Blog
            </Heading>
            <Heading color={"gray.text"} fontWeight={"bold"} variant={"p6"}>
              Latest Blog Posts
            </Heading>
            <Heading color={"gray.text"} variant={"p4"}>
              Tool and strategies modern teams need to help their companies
              grow.
            </Heading>
          </Box>
        </Box>
        <Box>
          <Box display={"flex"} flexWrap={"wrap"} gap={"2%"}>
            {blog2.map((object) => {
              return (
                <Box
                  mb={"4%"}
                  width={{md:'48%',sm:'48%',base:'100%'}}
                  display={"flex"}
                  flexDirection="column"
                  gap={3}
                  transition={"all 0.4s ease"}
                  _hover={{
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
                    transition: "all 0.4s ease",
                    transform: "scale(1.05)",
                  }}
                  // onClick={()=>{object}} object bhejna hai Article ko
                >
                  <Image width={"100%"} src={Generalblog.src} />
                  <Heading
                    color={"blue.500"}
                    fontWeight={"bold"}
                    variant={"p4"}
                  >
                    {object.Name}
                  </Heading>
                  <Box
                    alignItems={"start"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Heading
                      color={"gray.text"}
                      fontWeight={"bold"}
                      variant={"p6"}
                    >
                      {object.Title}
                    </Heading>
                    <Box mt={"1%"}>
                      <Image src={arrowupright.src} />
                    </Box>
                  </Box>
                  <Heading color={"gray.text"} variant={"p4"}>
                    How do you create compelling presentations that wow your colleagues and impress your managers?
                  </Heading>
                  <Box display={"flex"} gap={"2%"}>
                    <Image src={Avatar.src} />
                    <Box display={"flex"} flexDirection={"Column"}>
                      <Heading
                        color={"gray.text"}
                        fontWeight={"bold"}
                        variant={"p4"}
                      >
                        {object.UserName}
                      </Heading>
                      <Heading color={"gray.text"} variant={"p4"}>
                        {object.Date}
                      </Heading>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleMobile;
