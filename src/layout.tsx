import { Box } from '@chakra-ui/react'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Box backgroundColor={'neutral.95'} fontFamily={'Inter'} px={4} py={5}>
        {children}
      </Box>
    </>
  )
}
