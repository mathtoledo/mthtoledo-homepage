import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

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
      <Badge rounded="lg" px="2" p={3} variantColor="teal">
        {title}
      </Badge>
    </Box>
  </Box>
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
