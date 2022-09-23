import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon,
  SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioContent, BioSection, BioYear } from '../components/bio'
import ArticleLayout from '../components/layout/article'
import Model from '../libs/model'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin
} from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import VoxelDog from '../components/voxel-dog'
import NoSsr from '../components/no-ssr'

import thumbYoutube from '../public/images/links/youtube.png'
const Page = () => {
  return (
    <ArticleLayout>
      <Container>
        <Model />
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('blackAlpha.500', 'whiteAlpha.200')}
          color="white"
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a front-end developer base in Vietnam
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Hari Tran
            </Heading>
            <p>Frontend Developer (Artist / Developer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxW="100px"
              borderRadius="full"
              src="/images/avatar.jpg"
              alt="avatar"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading mb={2} as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hari Tran is a front-end dev and have passion with mechanical
            keyboard. With a Junior dev, he always wanna improve himself for
            being a better guy in feature. You can check his product called{' '}
            <NextLink href="/works/noobstore">
              <Link>NoobStore</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
                My works
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading mb={2} as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            <BioContent>Born in Ben Tre, Vietnam.</BioContent>
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            <BioContent>
              Completed the Software Engineer in Ho Chi Minh University of
              Technology
            </BioContent>
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            <BioContent>Front-ennd Dev at Aris Vietnam</BioContent>
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            <BioContent>
              Onsite Front-end Dev at Be group
              <Image ml={2} alt="be_logo" src="/images/be.svg" />
            </BioContent>
          </BioSection>
          <BioSection>
            <BioYear>2022 - present</BioYear>
            <BioContent>
              Software Engineer at Thuocsi
              <Image
                ml={2}
                alt="be_logo"
                src="/images/thuoc-si.svg"
                style={{ width: '96px', height: '24px' }}
              />
            </BioContent>
          </BioSection>
        </Section>
        <Section delay={0.2}>
          <Heading mb={2} as="h3" variant="section-title">
            I <span style={{ color: 'red' }}>❤</span>
          </Heading>
          <Paragraph>
            Baseketball, Football,{' '}
            <Link target="_blank" href="https://www.noobstore.xyz">
              Keyboard
            </Link>
            , Art, Short Video, Photography
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading mb={2} as="h3" variant="section-title">
            On the web
          </Heading>
          {/* <Box display="flex" mt={4} ml={4}>
            <Image
              width={6}
              height={6}
              src="/images/github-icon-blank.png"
              alt="github-icon"
            />
            <Link href="https://github.com/synztran" target="_blank" ml={2}>
              @synztran
            </Link>
          </Box> */}
          <List mt={4} ml={4}>
            <ListItem>
              <Link href="https://github.com/synztran" target="_blank" ml={2}>
                <Button
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  variant="ghost"
                >
                  @synztran
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.facebook.com/hongsynzhai"
                target="_blank"
                ml={2}
              >
                <Button
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                  variant="ghost"
                >
                  @Hồng Hải
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/haritran/"
                target="_blank"
                ml={2}
              >
                <Button
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                  variant="ghost"
                >
                  @Hải Hồng
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/____synz/"
                target="_blank"
                ml={2}
              >
                <Button
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                  variant="ghost"
                >
                  @____synz
                </Button>
              </Link>
            </ListItem>
          </List>
          <SimpleGrid column={[1, 1, 2]} gap={6} mt={4}>
            <GridItem
              href="https://www.youtube.com/channel/UCy7LMEPF756W_-hbLFR5OPg"
              title="Hari"
              thumbnail={thumbYoutube}
            >
              My Youtube Channel
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </ArticleLayout>
  )
}

export default Page
