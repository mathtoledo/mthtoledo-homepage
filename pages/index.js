import NextLink from 'next/link'
import {
  Divider,
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout title="Homepage">
    <Container maxW="container.md">
      <Box
        borderRadius="lg"
        mt={6}
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi there, I&apos;m a software engineer based in Brazil.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Matheus Toledo
          </Heading>
          <p>Software engineer / Post graduate in Data Science and Big Data</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderStyle="solid"
            w="200px"
            h="200px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/mathtoledo.png"
              alt="Profile image"
              borderRadius="full"
              width="150px"
              height="150px"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I&apos;m a full-stack developer based in Brazil with passion for
          building apps and web apps. He has good experience in tech, from
          planning and designing all the way to solving real-life problems with
          code. I love data science and bioinformatics, fields that I&apos;m
          always studying. When not working, I love to enjoy the free time
          hanging out with family/friends, read a good book or watch some
          series. I&apos;m current working for{' '}
          <NextLink
            href="https://www.nextage.com.br/"
            passHref
            scroll={false}
            target="_blank"
          >
            <Link>NextAge</Link>
          </NextLink>{' '}
          as a senior software engineer.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h2" variant="section-title">
          Bio
        </Heading>
        <BioSection mb={2}>
          <BioYear>1996</BioYear>
          Born in Paraná, Brazil.
        </BioSection>
        <BioSection mb={2}>
          <BioYear>2017</BioYear>
          Undergraduate degree in Technology in Analysis and System Development.
        </BioSection>
        <BioSection mb={2}>
          <BioYear>2020</BioYear>
          Studied 3 years of Biomedical Informatics. I canceled the course
          because I preferred to focus on my professional growth.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started especialization in Data Science and Big Data.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h2" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>Music, Guitar, Gaming, Reading</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h2" variant="section-title">
          Social
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/matheus-toledo/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @matheus-toledo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/mathtoledo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @mathtoledo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/mth.toledo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @mth.toledo
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Divider my={6} borderColor={'teal'} />
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
