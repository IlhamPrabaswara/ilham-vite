import { Box } from '@chakra-ui/react'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box backgroundColor={'neutral.95'}>
      <Box
        width={{ base: '100%', xl: '980px' }}
        fontFamily={'Inter'}
        px={{ base: 4, xl: 0 }}
        py={{ base: 5 }}
        margin={'auto'}
      >
        {children}
      </Box>
    </Box>
  )
}
