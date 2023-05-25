import { Flex, Link } from '@chakra-ui/react'
import {motion} from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <Flex
      as={motion.footer}
      w="full"
      h="13vh"
      bg="green.600"
      justifyContent="center"
      alignItems="center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link
        href='/'
        pt={3}
      >
        <Image
          src="/footer.webp"
          alt="Logo"
          height={40}
          width={120}
        />
      </Link>
    </Flex>
  )
}