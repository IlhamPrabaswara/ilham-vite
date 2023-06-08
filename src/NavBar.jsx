import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Flex
      align="center"
      bg="#fafafa"
      justify="space-between"
      w="100%"
      padding="16px 11px"
    >
      <Link fontSize={19} to="/">
        Ilham
      </Link>
      <Flex>
        <Link to="about">
          <Text p={2}>About</Text>
          </Link>
        <Link to="blog">
          <Text p={2}>Blog</Text>
          </Link>
        <Link to="contact">
        <Text p={2}>Contact</Text>
          </Link>
      </Flex>
      <Button color="#212121" variant="link">
        <HamburgerIcon />
      </Button>
      {/* <IconButton
          aria-label="Menu toggle"
          size='sm'
          icon={<HamburgerIcon />}
        ></IconButton> */}
    </Flex>

  )
}