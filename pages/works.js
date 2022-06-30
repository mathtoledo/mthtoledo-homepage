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
  <Layout title="Works">
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
            title="Controlenamao"
            text="POS application Startup with more than a thousand clients. In this project 
            I worked in the core implementing payment integrations with credit/debit cards."
            year={2018}
            category={'web app'}
            website={'https://controlenamao.com.br/'}
            stack={'Java, Hibernate, AngularJS, MySQL, Datastore, AppEngine'}
          />
        </Section>
      </SimpleGrid>

      <Divider my={6} borderColor={'teal'} />
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
