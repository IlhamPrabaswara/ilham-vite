import { Box } from '@chakra-ui/react'
import Footer from './footer'
interface MyComponentProps {
  children: React.ReactNode
}
const PageContainer = ({ children }: MyComponentProps) => {
  return (
    <>
      <Box w={'87.5%'} mx={'auto'} pb={'50px'}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default PageContainer
