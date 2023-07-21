import { Box } from '@chakra-ui/react'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Box backgroundColor={'neutral.95'} padding={4}>{children}</Box>
    </>
  )
}
