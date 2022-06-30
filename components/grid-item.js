import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Badge,
  useColorModeValue,
  Center,
  NextLink,
  Stack,
  Heading
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

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
    <Box mt={2}>
      <Badge rounded="lg" px="2" p={2} variantColor="teal">
        {title}
      </Badge>
    </Box>
  </Box>
)

export const WorkItem = ({ title, text, year, category }) => (
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
        <Box>
          <Badge fontSize={16} color={'teal'}>
            {category}
          </Badge>
        </Box>
      </Stack>
      <Box align={'left'} mb={2}>
        <Badge fontSize={16} color={'teal'}>
          {year}
        </Badge>
      </Box>
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
