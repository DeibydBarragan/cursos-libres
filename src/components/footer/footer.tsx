import { Flex, Image, Link } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Flex
      as="footer"
      w="full"
      h={20}
      mt={10}
      bg="green.600"
      justifyContent="center"
      alignContent="center"
    >
      <Link
        href='/'
      >
        <Image
          src="/logo.png"
          alt="Logo"
          height="100%"
        />
      </Link>
    </Flex>
  )
}