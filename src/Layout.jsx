import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      
      <Box paddingX={"16px"}>{children}</Box>
    </>
  )
}

export default Layout;
