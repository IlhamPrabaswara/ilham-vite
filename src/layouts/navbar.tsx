import { Box, Collapse, Flex, Stack, useDisclosure } from '@chakra-ui/react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const NavBar: FC = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box
      className="navbar"
      display={'block'}
      h={12}
      w={'full'}
      mb={5}
      position={'sticky'}
      top={'0px'}
      zIndex={9999}
    >
      <Box
        className="ac-ln-wrapper"
        position={'absolute'}
        w={'full'}
        h={'100%'}
        top={0}
        zIndex={1}
      >
        <Box
          className="ac-ln-background"
          display={'block'}
          h={isOpen ? '100vh' : '100%'}
          position={'absolute'}
          width={'full'}
          zIndex={1}
          bg={'rgba(255, 255, 255, 0.9)'}
          backdropFilter={'blur(20px)'}
          _after={{
            content: '',
            backgroundColor: 'rgba(0,0,0,0.16)',
            display: 'block',
            height: '1px',
            position: 'absolute',
            top: '100%',
            width: '100vw',
          }}
        ></Box>
        <Flex
          className="ac-ln-content"
          align={'center'}
          h={12}
          justify={'space-between'}
          mb={5}
          px={4}
          position={'relative'}
          top={0}
          zIndex={2}
        >
          <Link to={'/'}>Ilham</Link>
          <button aria-label="Open navigation" onClick={onToggle}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
                fill="#45464F"
              />
            </svg>
          </button>
          <Box
            as={Collapse}
            in={isOpen}
            position={'absolute'}
            top={12}
            endingHeight={'calc(100vh - 48px)'}
            zIndex={9999}
          >
            <Stack
              onClick={onToggle}
              h="calc(100vh - 48px)"
              w={'100vw'}
              px={8}
              mt={4}
              spacing={15}
              zIndex={9999}
            >
              <Link to={'/about'}>About</Link>
              <Link to={'/blog'}>Blog</Link>
              <Link to={'/contact'}>Contact</Link>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default NavBar
