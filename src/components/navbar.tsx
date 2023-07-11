import { FC } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Icon,
  useDisclosure,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex
      alignItems={'center'}
      justifyContent={'space-between'}
      bg="tomato"
      w="100%"
      paddingX={4}
      paddingY={3}
      color="white"
    >
      <Link to={'/'}>Ilham</Link>
      <Button onClick={onOpen} variant={'link'}>
        <Icon
          width="6"
          height="6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
            fill="#ffffff"
          />
        </Icon>
      </Button>
      <Drawer placement="top" isOpen={isOpen} onClose={onClose} size={'full'}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader p={2} height={'48px'} borderBottomWidth="1px">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Flex
              direction={'column'}
              gap={3}
              position={'absolute'}
              width={'full'}
            >
              <Link to={'/about'}>About</Link>
              <Link to={'/blog'}>Blog</Link>
              <Link to={'/contact'}>Contact</Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default NavBar
