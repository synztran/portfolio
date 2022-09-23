import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { PostGridItem } from '../components/grid-item'
import Section from '../components/section'
import thumbCode_1 from '../public/images/posts/post-1.jpg'

const postList = [
  {
    id:"some-advice-after-a-few-years-working",
    title:"Some advice after a few years working",
    thumbnail: thumbCode_1,
    createdDate:"Jun 29, 2022",
    category:"Life",
    categoryColor:"green",
    child: 'Hi! Welcome to my first post after release this portfolio and for last day at current company. Ya! This may sound weird, but I just want to share it with someone who has a chance to read it.'
  },
  {
    id:"socializing-at-work",
    title:"Socializing at Work",
    thumbnail: thumbCode_1,
    createdDate:"Aug 17, 2022",
    category:"Skill",
    categoryColor:"orange",
    child: '...'
  }
]
console.log(postList)
const PostsPage = () => {
  return (
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {/* <Section delay={0.3}>
          <PostGridItem
            id="some-advice-after-a-few-years-working"
            title="Some advice after a few years working"
            thumbnail={thumbCode_1}
            createdDate="June 29, 2022"
            category="Life"
            categoryColor="green"
          >
            Hi! Welcome to my first post after release this portfolio and for
            last day at current company. Ya! This may sound weird, but I just
            want to share it with someone who has a chance to read it.
          </PostGridItem>
        </Section> */}
        
        {postList && postList.length > 0 && postList.map((post) => {
          return <Section delay={0.3}>
          <PostGridItem
            id={`${post.id}`}
            title={`${post.title}`}
            thumbnail={post.thumbnail}
            createdDate={`${post.createdDate}`}
            category={`${post.category}`}
            categoryColor={`${post.categoryColor}`}
          >
           {post.child}
          </PostGridItem>
        </Section>
        })}
        
      </SimpleGrid>
    </Container>
  )
}

export default PostsPage
