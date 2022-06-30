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
            title="CASSI - Patient Electronic Record"
            text="Currently working on a patient electronic record for CASSI, largest health self-management 
            operator in Brazil."
            year={2022}
            category={'web app'}
            website={'https://www.cassi.com.br/'}
            stack={'React / C# / .Net / Java'}
          />
        </Section>
        <Section delay={0.2}>
          <WorkItem
            title="Knome"
            text="App that helps people know their home receiving proactive notifications, recommendations and
            step-by-step directions how to complete tasks. In this project I worked in all features in the app and
            in the admin dashboard."
            year={2021}
            category={'web app / app'}
            website={'https://www.myknome.com/'}
            stack={'React / React Native / DynamoDB / AWS Amplify'}
          />
        </Section>
        <Section delay={0.2}>
          <WorkItem
            title="Life Key"
            text="Plattform that promotes metrics for sustainability in companies. In this project I worked developing 
            new features dealing with complex calculations to generate metrics."
            year={2021}
            category={'web app'}
            website={'https://institutolife.org/'}
            stack={'React / Node / Docker / MySQL / Handlebars'}
          />
        </Section>
        <Section delay={0.2}>
          <WorkItem
            title="Nela"
            text="Social media platform for companies with more than 60.000 active users. In this project I developed 
            new features and improvements for existing features."
            year={2020}
            category={'web app'}
            website={'https://nela.com.br/'}
            stack={'Node / Ember / MongoDB / MySQL / RabbitMQ'}
          />
        </Section>
        <Section delay={0.2}>
          <WorkItem
            title="Techfin"
            text="Payment gateway for a fintech app. In this project I develop payment integrations with credit/debit 
            cards with asynchronous callbacks developing webhooks."
            year={2020}
            category={'gateway'}
            stack={'Java / Docker / MySQL / Spring Boot / PubSub'}
          />
        </Section>
        <Section delay={0.2}>
          <WorkItem
            title="Cessão de Créditos"
            text="Platform developed to connect sellers with investors who are interested in evaluating and 
            purchasing performing and non-performing loans. In this project I act in all the functionalities dealing 
            with complex calculations, charts and reports."
            year={2019}
            category={'web app'}
            website={'https://www.portalcessaodecreditos.com.br/'}
            stack={'Java / Hibernate / Angular / MySQL, Datastore, AppEngine'}
          />
        </Section>
        <Section delay={0.2}>
          <WorkItem
            title="Controle na Mão"
            text="POS application Startup with more than a thousand clients. In this project 
            I worked in the core implementing payment integrations with credit/debit cards."
            year={2018}
            category={'web app'}
            website={'https://controlenamao.com.br/'}
            stack={
              'Java / Hibernate / AngularJS / MySQL / Datastore / AppEngine'
            }
          />
        </Section>
      </SimpleGrid>

      <Divider my={6} borderColor={'teal'} />
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
