import { Badge, Box, Container, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Paragraph from '../../components/paragraph'
import thumbCode_1 from '../../public/images/posts/post-1.jpg'

const PostDetailPage = () => {
  const title = 'socializing-at-work'
  const content = `...`
  const convertBr = content => {
    return content.replace(/(?:\r\n|\r|\n)/g, '<br>&emsp;')
  }
  return (
    <Container maxW="container.lg">
      <Box mb={4}>
        <Heading as="h1" fontSize={32} mb={2}>
          {title &&
            title.replaceAll('-', ' ').charAt(0).toUpperCase() +
              title.replaceAll('-', ' ').slice(1)}
        </Heading>
        <Box display="flex" experimental_spaceX={2}>
          <Badge
            padding=".25rem .75rem"
            height="fit-content"
            variant="solid"
            colorScheme="orange"
            textTransform="none"
            fontSize={14}
          >
            Skill
          </Badge>
          <Text textAlign="left" color="#9ca3af">
            Aug 17, 2022
          </Text>
        </Box>
      </Box>
      <Image
        src={thumbCode_1}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <Paragraph
        dangerouslySetInnerHTML={{ __html: convertBr(content) }}
      ></Paragraph>
    </Container>
  )
}
export default PostDetailPage
