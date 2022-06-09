import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;

  height: 80px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
    transition: all 0.5s;
  }
`

const Logo = () => {
  const footImage = `/images/logo.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footImage} alt="logo" width={100} height={60} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily={`'M PLUS Rounded 1c'`}
            fontWeight="bold"
            ml={3}
          >
            Hari Tran
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
