import { Heading, Stack, Text } from '@chakra-ui/react'
import PageContainer from '../../layouts/pageContainer'

const About = () => {
  return (
    <PageContainer>
      <Heading fontSize={24} mb={'15px'}>
        Lorem
      </Heading>
      <Stack fontSize={14} gap={'10px'}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nam at
          odio esse consequatur quo dicta molestias, hic magnam nisi. Beatae
          libero consequatur nesciunt accusantium corrupti dolorem minima
          mollitia unde! Consectetur molestiae velit commodi tempore aperiam
          nisi labore doloremque repudiandae vero dolorum.
        </Text>
        <Text>
          Minima commodi error pariatur odit ut aut iure similique illo
          explicabo obcaecati nesciunt nihil, beatae, voluptatem accusantium?
          Facilis.
        </Text>
        <Text>
          Velit vero repudiandae dignissimos est fuga, consequuntur vitae
          impedit magnam hic quos quidem corrupti provident assumenda deserunt
          blanditiis eaque rem aut quaerat reiciendis recusandae doloremque
          nesciunt? Excepturi atque fugiat possimus.
        </Text>
      </Stack>
    </PageContainer>
  )
}
export default About
