import { Box } from '@chakra-ui/react'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Box padding={4}>{children}</Box>
    </>
  )
}
