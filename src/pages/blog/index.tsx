import { Grid, Heading } from '@chakra-ui/react'
import PageContainer from '../../layouts/pageContainer'
import BlogCard from '../../components/cards/blogCard'
import { useEffect, useState } from 'react'
import { dataBlog } from '../../interfaces/dataBlog.interfaces'
import { supabase } from '../../utils/supabaseClient'

const Blog = () => {
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
    <PageContainer>
      <Heading fontSize={24} lineHeight={'28px'} mb={4}>
        Latest Posts
      </Heading>
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
  )
}

export default Blog
