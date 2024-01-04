import Header from "@/Components/Header/Header";
import React from "react";
import {
  Box
} from "@chakra-ui/react";
import ArticleDesktop from "./article/ArticleDesktop";
import ArticleMobile from "./article/ArticleMobile";
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

const Article = () => {
  return (
    <Box>
      <Box display={{lg:'block',base:'none'}}>
          <ArticleDesktop/>
      </Box>
      <Box display={{lg:'none',base:'block'}}>
          <ArticleMobile/>
      </Box>
    </Box>
  );
};

export default Article;