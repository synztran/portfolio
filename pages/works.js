import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbNoobstore from '../public/images/works/work-1.png'
// import thumbAdmin from '../public/images/works/work-2.png'

const WorksPage = () => {
  return (
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="noobstore"
            title="NoobStore"
            thumbnail={thumbNoobstore}
          >
            A webpage service keyboard
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.3}>
          <WorkGridItem id="admin" title="Admin page" thumbnail={thumbAdmin}>
            A admin page manager noobstore page
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  )
}
export default WorksPage
