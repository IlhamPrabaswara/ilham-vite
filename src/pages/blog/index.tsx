import { Card, CardBody, Grid, Heading, Image, Text } from "@chakra-ui/react";
import PageContainer from "../../layouts/pageContainer";
import { BlogPost } from "../../data/blogPost";

const Blog = () => {
  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default Blog;