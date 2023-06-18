import { Card, CardBody, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { BlogPost } from "../constant/blogPost";
import Layout from "../components/layout/layout";

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
