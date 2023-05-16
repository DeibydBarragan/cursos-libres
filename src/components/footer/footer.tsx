import { Flex, Image, Link } from '@chakra-ui/react'
import {motion} from 'framer-motion';

export default function Footer() {
  return (
    <Flex
      as={motion.footer}
      w="full"
      h="13vh"
      bg="green.600"
      justifyContent="center"
      alignContent="center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link
        href='/'
        pt={3}
      >
        <Image
          src="/footer.png"
          alt="Logo"
          height="10vh"
        />
      </Link>
    </Flex>
  )
}