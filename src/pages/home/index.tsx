import MainLayout from '../../layout'

import HeroSection from '../../components/pages/home/heroSection'
import BlogSection from '../../components/pages/home/blogSection'

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <BlogSection />
    </MainLayout>
  )
}

export default Home
