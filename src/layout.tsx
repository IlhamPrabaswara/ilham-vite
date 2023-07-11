// import React from "react";

import { Box } from '@chakra-ui/react'
import NavBar from './components/navbar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <Box padding={4}>{children}</Box>
    </>
  )
}
