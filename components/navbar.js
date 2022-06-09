import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../components/theme-toggle-button'

const LinkItem = ({ href, path, child, icon }) => {
  const active = path === href
  return (
    <NextLink href={href} passHref={icon ? true : false}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        target={icon ? '_blank' : ''}
      >
        <Box display="flex" alignItems="center">
          {icon ? (
            <Image
              marginRight={2}
              width={5}
              height={5}
              src={icon}
              alt="github-icon"
            />
          ) : (
            ''
          )}
          {child}
        </Box>
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tight'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          justifyContent="left"
          mt={{ base: 4, md: 0 }}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        >
          <LinkItem href="/works" path={path} child="Works" />
          <LinkItem href="/posts" path={path} child="Posts" />
          <LinkItem
            href="https://github.com/synztran"
            child="Github"
            icon="/images/github-icon-blank.png"
          />
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
