import { Badge, Box, Container, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Paragraph from '../../components/paragraph'
import thumbCode_1 from '../../public/images/posts/post-1.jpg'

const PostDetailPage = () => {
  const title = 'some-advice-after-a-few-years-working'
  const content = `Chào người lạ! Nếu bạn đọc được những dòng này, thì tôi rất cảm ơn bạn vì đã ghé qua nơi đây. Cảm ơn bạn và chúc bạn có một ngày tốt lành. Giờ thì tiếp tục với câu chuyện mà tôi muốn nói đến nhé. \n\n Lúc tôi viết những dòng này, thì có thể là những ngày cuối tôi còn làm việc ở công ty nơi mà từ những ngày đâu sau khi tốt nghiệp tôi đã làm việc và kết giao với những đồng nghiệp. 3 năm cũng phải thời gian ngắn, nhưng kỉ niệm và sự trải nghiệm là những thứ nếu như bạn không đi làm thì sẽ khó mà cảm nhận được nó như thế nào. \n\n Được rồi, cũng quay lại vấn đề chính của bài viết này. Đối với mình thì người làm lâu năm, hay là mới ra trường thì điều quan trọng nhất cần có là một "Mentor" - Người sẽ hướng dẫn, diều dắt mình trong suốt quá trình làm việc ở công ty đấy. Đối với những người Mentor có trách nhiệm họ sẽ hỗ trợ và mong muốn bạn đạt được mục tiêu chung trong công việc, còn một người Mentor tốt, không những trong vấn đề công việc, họ sẽ mở lòng hơn ngoài phạm vi công việc, mà những hoạt động hội nhóm ngoài giờ làm`
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
            colorScheme="green"
            textTransform="none"
            fontSize={14}
          >
            Life
          </Badge>
          <Text textAlign="left" color="#9ca3af">
            Jun 29, 2022
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
