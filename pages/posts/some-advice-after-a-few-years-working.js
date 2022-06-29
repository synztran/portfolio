import { Badge, Box, Container, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Paragraph from '../../components/paragraph'
import thumbCode_1 from '../../public/images/posts/post-1.jpg'

const PostDetailPage = () => {
  const title = 'some-advice-after-a-few-years-working'
  const content = `Chào người lạ! Nếu bạn đọc được những dòng này, thì tôi rất cảm ơn bạn vì đã ghé qua nơi đây. Cảm ơn bạn và chúc bạn có một ngày tốt lành. Giờ thì tiếp tục với câu chuyện mà tôi muốn nói đến nhé. \n\n Lúc tôi viết những dòng này, thì có thể là những ngày cuối tôi còn làm việc ở công ty nơi mà từ những ngày đâu sau khi tốt nghiệp tôi đã làm việc và kết giao với những đồng nghiệp. 3 năm cũng phải thời gian ngắn, nhưng kỉ niệm và sự trải nghiệm là những thứ nếu như bạn không đi làm thì sẽ khó mà cảm nhận được nó như thế nào...`
  const convertBr = content => {
    return content.replace(/(?:\r\n|\r|\n)/g, '<br>&emsp;')
  }
  return (
    <Container maxW="container.lg">
      <Box mb={4}>
        <Heading as="h2" fontSize={24} mb={2}>
          {title &&
            title.replaceAll('-', ' ').charAt(0).toUpperCase() +
              title.replaceAll('-', ' ').slice(1)}
        </Heading>
        <Box display="flex" experimental_spaceX={2}>
          <Badge
            padding=".25rem .75rem"
            height="fit-content"
            variant="solid"
            colorScheme="green"
            textTransform="none"
            fontSize={14}
          >
            Life
          </Badge>
          <Text textAlign="left" color="#9ca3af">
            June 29, 2022
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
