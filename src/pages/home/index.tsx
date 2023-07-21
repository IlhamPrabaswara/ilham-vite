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
import { BlogDataType } from '../../interfaces/blog.interfaces'

const Home = () => {
  const [dataBlog, setDataBlog] = useState<BlogDataType[]>()

  useEffect(() => {
    getBlog()
  }, [])
  const getBlog = async () => {
    const { data }: any = await supabase.from('blog-posts').select()
    setDataBlog(data)
  }
  return (
    <MainLayout>
      <Box mb={50}>
        <Image
          alt="Ilham"
          borderRadius={10}
          height={'215px'}
          objectFit={'cover'}
          src="./landing-image.png"
          w={'full'}
        />
        <Heading mt={2.5} fontSize={'21px'} lineHeight={'25px'}>
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
            {/* <Image maxH={"170px"} src={item.imgSrc} /> */}
            <CardBody p={6}>
              <Heading fontSize={12} textTransform={'uppercase'}>
                {item.postCategory}
              </Heading>
              <Heading mt={1} fontSize={19}>
                {item.postTitle}
              </Heading>
              <Text mt={2}>{item.postDate}</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </MainLayout>
  )
}

export default Home
