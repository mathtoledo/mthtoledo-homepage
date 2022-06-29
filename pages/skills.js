import {
  Heading,
  SimpleGrid,
  Divider,
  Container,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { SimpleGridItem } from '../components/grid-item'

import js_svg from '../public/svg/js-svgrepo-com.svg'
import react_svg from '../public/svg/reactjs-svgrepo-com.svg'

const Skills = () => (
  <Layout title="Skills">
    <Container maxW="container.md">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        A brief <strong>list</strong> of my knowledge base and tools used.
      </Box>

      <Heading variant="section-title" mb={5}>
        Programming
      </Heading>

      <Section delay={0.2}>
        <SimpleGrid columns={[2, 3, 5]} gap={6}>
          <SimpleGridItem title="JavaScript" thumbnail={js_svg} />
        </SimpleGrid>
      </Section>

      <Heading variant="section-title" mb={5}>
        Frameworks
      </Heading>

      <Section delay={0.2}>
        <SimpleGrid columns={[2, 3, 5]} gap={6}>
          <SimpleGridItem title="React" thumbnail={react_svg} />
        </SimpleGrid>
      </Section>

      <Divider my={6} borderColor={'teal'} />
    </Container>
  </Layout>
)
export default Skills
export { getServerSideProps } from '../components/chakra'
