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
  Text,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import styled from '@emotion/styled'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
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
          <p>Developer / Tech enthusiast</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderStyle="solid"
            w="100px"
            h="100px"
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
          Is
        </Heading>
        <Paragraph>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
          <br />
          <br />
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
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
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Paraná, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Started studies in ...
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h2" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>Open Source, Gaming, ...</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h2" variant="section-title">
          Social
        </Heading>

        <List>
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

          <Link href="https://twitter.com/mth.toledo" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoTwitter />}
            >
              @mth.toledo
            </Button>
          </Link>
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
