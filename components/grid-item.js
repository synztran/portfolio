import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Badge } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        alt="title"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`} target="_blank">
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const PostGridItem = ({
  children,
  id,
  title,
  thumbnail,
  createdDate,
  category,
  categoryColor
}) => (
  <Box w="100%" align="center" bg="rgb(31,41,55)">
    <NextLink href={`/posts/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <Box p={4} experimental_spaceY={2}>
          <LinkOverlay
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            href={`/posts/${id}`}
            target="_blank"
          >
            <Text
              textAlign="left"
              fontSize={22}
              color="#ff63c3"
              height="fit-content"
            >
              {title}
            </Text>
            <Badge
              padding=".25rem .75rem"
              height="fit-content"
              variant="solid"
              colorScheme={categoryColor}
              textTransform="none"
            >
              {category}
            </Badge>
          </LinkOverlay>
          <Text
            style={{ textIndent: '1em' }}
            color="rgba(255,255,255,.92)"
            align="left"
            noOfLines={2}
          >
            {children}
          </Text>
          <Text textAlign="left" color="#9ca3af">
            {createdDate}
          </Text>
        </Box>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail{
        border-radius:12px
    }`}
  />
)
