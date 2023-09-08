import { Card, CardBody, Flex, Heading, Image, Text } from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BlogDataInterface } from '../../../interfaces/blog.interfaces'
import { supabase } from '../../../utils/supabaseClient'

const BlogSection = () => {
  const [dataBlog, setDataBlog] = useState<BlogDataInterface[]>()
  const getBlog = async () => {
    const { data }: any = await supabase.from('blog-posts').select()
    setDataBlog(data)
  }

  useEffect(() => {
    getBlog()
  }, [])
  return (
    <section>
      <Text fontSize={11} letterSpacing={2} mb={5} textTransform={'uppercase'}>
        Blog
      </Text>
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        w={{ xl: '980px' }}
        justifyContent={{ xl: 'space-between' }}
      >
        {dataBlog?.map((item) => (
          <Card
            key={item.id}
            overflow={'hidden'}
            variant={'filled'}
            bgColor={'white'}
            borderRadius={12}
            width={{ xl: '303px' }}
          >
            <Image fit={'cover'} src={item.imgUrl} />
            <CardBody p={6}>
              <Heading
                color={'secondary.60'}
                fontFamily={'Inter'}
                fontSize={12}
                textTransform={'uppercase'}
              >
                {item.postCategory}
              </Heading>
              <Link to={`./blog/${item.slug}`}>
                <Heading fontFamily={'Inter'} fontSize={19} mt={1}>
                  {item.postTitle}
                </Heading>
              </Link>
              <Text fontSize={'14px'} mt={2}>
                {item.postDate}
              </Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </section>
  )
}

export default BlogSection
