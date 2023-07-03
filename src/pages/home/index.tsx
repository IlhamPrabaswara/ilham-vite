import { useEffect, useState } from 'react'
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react'
import { supabase } from '@/utils/supabaseClient'
import { dataBlog } from '@/interfaces/dataBlog.interfaces'
import BlogCard from '@/components/cards/blogCard'
import PageContainer from '@/layouts/pageContainer'

const Home = () => {
  const [dataBlog, setDataBlog] = useState<dataBlog[]>()

  useEffect(() => {
    getBlog()
  }, [])
  const getBlog = async () => {
    const res = await supabase.from('blog-posts').select()
    const data = res.data as dataBlog[]
    setDataBlog(data)
  }
  return (
    <>
      <PageContainer>
        <Box mb={50}>
          <Image
            borderRadius={8}
            h={215}
            w={'full'}
            objectFit={'cover'}
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80"
          />
          <Heading mt={2.5} fontSize={'21px'} lineHeight={'25px'}>
            Hi! I’m Ilham — Full time nerd.
          </Heading>
          <Text fontSize={'17px'} lineHeight={'25px'}>
            A front-end enthusiast from Indonesia. Interested in React, Node,
            visual design, bikes, photography, and music.
          </Text>
        </Box>
        <Text
          fontSize={11}
          letterSpacing={2}
          mb={5}
          textTransform={'uppercase'}
        >
          Blog
        </Text>
        <Grid gap={10}>
          {dataBlog?.map((item) => (
            <BlogCard
              key={item.id}
              id={item.id}
              postCategory={item.postCategory}
              postTitle={item.postTitle}
              postDate={item.postDate}
            />
          ))}
        </Grid>
      </PageContainer>
    </>
  )
}

export default Home
