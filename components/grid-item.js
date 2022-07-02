import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Badge,
  useColorModeValue,
  Center,
  Link,
  Stack,
  Heading
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2} mb={1} fontSize={12}>
    {children}
  </Badge>
)

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const SimpleGridItem = ({ title, thumbnail }) => (
  <Box
    w="100%"
    textAlign="center"
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
    borderRadius="lg"
    p={4}
  >
    <Image
      src={thumbnail}
      alt={title}
      className="simple-grid-item-thumbnail"
      loading="lazy"
    />
    <Box mt={2} display={'flex'} justifyContent={'center'}>
      <Badge rounded="lg" px="2" p={2} variantColor="teal">
        {title}
      </Badge>
    </Box>
  </Box>
)

export const WorkItem = ({ title, text, year, category, stack, website }) => (
  <Center>
    <Box
      w="100%"
      textAlign="center"
      p={5}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      boxShadow={'2xl'}
      borderRadius="lg"
    >
      <Stack direction={'row'} alignItems={'center'}>
        <Heading textAlign="left" fontSize={24} variant="section-title">
          {title}
        </Heading>
        <Box>
          <ChevronRightIcon />
        </Box>
        <Box align={'left'} mb={2}>
          <Badge fontSize={16} color={'teal'} mr={2}>
            {year}
          </Badge>
          <Badge fontSize={16} color={'teal'}>
            {category}
          </Badge>
        </Box>
      </Stack>
      {website && (
        <Stack direction={'row'} mb={2}>
          <Box align={'left'}>
            <Meta>Website</Meta>
          </Box>
          <Link href={website} target="_blank" overflow={'auto'}>
            {website} <ExternalLinkIcon mx="2px" />
          </Link>
        </Stack>
      )}
      {stack && (
        <Stack direction={'row'} mb={2}>
          <Box align={'left'}>
            <Meta>Stack</Meta>
          </Box>
          <Text>{stack}</Text>
        </Stack>
      )}
      <Text textAlign={'left'} mb={3} fontSize={16}>
        {text}
      </Text>
    </Box>
  </Center>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
