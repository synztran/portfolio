import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'
import NoSsr from '../no-ssr'
const Main = ({ children, router }) => {
  return (
    <Box maxW="100%" as="main" pb={16}>
      <Head>
        <meta name="viewport" content="width=device-with, initial-scale=1" />
        <title> Hari Tran - Home Page</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={24}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
