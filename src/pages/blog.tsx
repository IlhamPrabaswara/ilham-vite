import { Card, CardBody, Grid, Heading, Image, Text } from "@chakra-ui/react";
import Layout from "../components/layout";

const BlogPost = [
  {
    ID: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1685942962211-bdae665b7a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    postCategoery: "Photography",
    postTitle:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper porttitor diam netus eget.",
    postDate: "May 6, 2023",
  },
  {
    ID: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1685942962211-bdae665b7a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    postCategoery: "Photography",
    postTitle:
      "Lorem ipsum dolor sit amet consectetur. Ullamcorper porttitor diam netus eget.",
    postDate: "May 6, 2023",
  },
];

const Blog = () => {
  return (
    <Layout>
      <Heading fontSize={24} lineHeight={"28px"} mb={4}>
        Latest Posts
      </Heading>
      <Grid gap={10}>
        {BlogPost.map((item) => (
          <Card
            key={item.ID}
            overflow={"hidden"}
            variant={"filled"}
            bgColor={"white"}
            borderRadius={12}
          >
            <Image maxH={"170px"} src={item.imgSrc} />
            <CardBody p={6}>
              <Heading fontSize={12} textTransform={"uppercase"}>
                {item.postCategoery}
              </Heading>
              <Heading mt={1} fontSize={19}>
                {item.postTitle}
              </Heading>
              <Text mt={2}>{item.postDate}</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Layout>
  );
};

export default Blog;
