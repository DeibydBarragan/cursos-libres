import { Flex, Image, Link } from '@chakra-ui/react'
import {motion} from 'framer-motion';

export default function Footer() {
  return (
    <Flex
      as={motion.footer}
      w="full"
      h={20}
      mt={10}
      bg="green.600"
      justifyContent="center"
      alignContent="center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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