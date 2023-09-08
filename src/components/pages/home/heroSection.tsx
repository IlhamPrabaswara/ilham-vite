import { Box, Heading, Image, Text } from '@chakra-ui/react'

const HeroSection = () => {
  return (
    <Box mb={50}>
      <Image
        alt="Ilham"
        borderRadius={10}
        height={{ base: '215px', xl: '325px' }}
        objectFit={'cover'}
        src="/img/landing-image.png"
        w={{ base: 'full', xl: '536px' }}
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
        A front-end enthusiast from Indonesia. Interested in React, Node, visual
        design, bikes, photography, and music.
      </Text>
    </Box>
  )
}

export default HeroSection
