import { useLoaderData } from 'react-router-dom'
import MainLayout from '../../../layout'
import { BlogDataInterface } from '../../../interfaces/blog.interfaces'
import { Heading, Text } from '@chakra-ui/react'

const BlogPost = () => {
  const fetchBlog: any = useLoaderData()
  return (
    <MainLayout>
      {fetchBlog?.data.map((item: BlogDataInterface) => (
        <>
          <Heading>{item.postTitle}</Heading>
          <Text>{item.postBody}</Text>
        </>
      ))}
    </MainLayout>
  )
}

export default BlogPost
