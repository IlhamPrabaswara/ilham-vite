import {
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import MainLayout from '../../layout'
import { supabase } from '../../utils/supabaseClient'
import { useEffect, useState } from 'react'
import { BlogDataInterface } from '../../interfaces/blog.interfaces'
import { Link } from 'react-router-dom'

const Home = () => {
  const [dataBlog, setDataBlog] = useState<BlogDataInterface[]>()
  const getBlog = async () => {
    const { data }: any = await supabase.from('blog-posts').select()
    setDataBlog(data)
  }

  useEffect(() => {
    getBlog()
  }, [])

  return (
    <MainLayout>
      <Box mb={50}>
        <Image
          alt="Ilham"
          borderRadius={10}
          height={'215px'}
          objectFit={'cover'}
          src="/img/landing-image.png"
          w={'full'}
        />
        <Heading
          fontFamily={'Inter'}
          fontSize={'21px'}
          lineHeight={'25px'}
          mt={2.5}
        >
          Hi! I’m Ilham — Full time nerd.
        </Heading>
        <Text fontSize={'17px'} lineHeight={'25px'}>
          A front-end enthusiast from Indonesia. Interested in React, Node,
          visual design, bikes, photography, and music.
        </Text>
      </Box>
      <Text fontSize={11} letterSpacing={2} mb={5} textTransform={'uppercase'}>
        Blog
      </Text>
      <Grid gap={10}>
        {dataBlog?.map((item) => (
          <Card
            key={item.id}
            overflow={'hidden'}
            variant={'filled'}
            bgColor={'white'}
            borderRadius={12}
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
              <Text mt={2}>{item.postDate}</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </MainLayout>
  )
}

export default Home
