import { Card, CardBody, Heading, Text } from '@chakra-ui/react'
import { FC } from 'react'

const BlogCard: FC<blogCardInterface> = ({
  id,
  postCategory,
  postTitle,
  postDate,
}) => {
  return (
    <Card
      key={id}
      overflow={'hidden'}
      variant={'filled'}
      bgColor={'white'}
      borderRadius={12}
    >
      {/* <Image maxH={"170px"} src={item.imgSrc} /> */}
      <CardBody p={6}>
        <Heading fontSize={12} textTransform={'uppercase'}>
          {postCategory}
        </Heading>
        <Heading mt={1} fontSize={19}>
          {postTitle}
        </Heading>
        <Text mt={2}>{postDate}</Text>
      </CardBody>
    </Card>
  )
}

export default BlogCard
