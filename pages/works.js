import {
  Link,
  Container,
  SimpleGrid,
  Divider,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkItem } from '../components/grid-item'

const Works = () => (
  <Layout title="work()">
    <Container maxW="container.md">
      <Box
        borderRadius="lg"
        mt={6}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Here&apos;s some of my works.
      </Box>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section delay={0.2}>
          <WorkItem
            title="Project 1"
            text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
					erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
					et ea rebum. "
            year={2022}
            category={'website'}
          />
        </Section>
      </SimpleGrid>

      <Divider my={6} borderColor={'teal'} />
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
